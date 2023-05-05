import { plugins } from '@citation-js/core'
import '@citation-js/plugin-csl'
const cslConfig = plugins.config.get('@csl')
let citeproc
let engineData = []

/**
 * call only normalCase() or bugCase() and read their results in console
 */
// normalCase()
bugCase()


/**
* This one produce expected result. Two data in two citaions out. 
*/
function normalCase() {
  const firstResult = cite(data1(), 0, [], [])
  const citationPre = [[firstResult[0].citationId, 0]]
  const secondResult = cite(data2(), 1, citationPre, [])
  console.log(secondResult)

  // secondResult
  // [
  //   {
  //       "citationId": "a18i6afo7go",
  //       "index": 0,
  //       "citation": "(Gerald et al., 2004)"
  //   },
  //   {
  //       "citationId": "a1vf8ihn1v6",
  //       "index": 1,
  //       "citation": "(<i>Brief Introduction to Kudos</i>, 2015)"
  //   }
  // ]
}

/**
* This one has bug. The only difference between the two is the 
* order of data being passed in. In this case, a "webpage" from `data2()`
* is passed first, and it got swalloed somehow. it seems that an empty 
* author field of `data2()` is casuing the bug, but it is fine in
* `normalCase()`
*/
function bugCase() {
  const firstResult = cite(data2(), 0, [], [])
  const citationPre = [[firstResult[0].citationId, 0]]
  const secondResult = cite(data1(), 1, citationPre, [])
  console.log(secondResult)

  // (<i>Brief Introduction to Kudos</i>, 2015) of firstResult
  // is missing in the secondResult
  // [
  //   {
  //     "citationId": "a201uc87grd",
  //     "index": 1,
  //     "citation": "(Gerald et al., 2004)"
  //   }
  // ]
}

function cite(data, insertIndex, citationPre, citationPost) {
  engineData = [...engineData, ...data]
  citeproc = cslConfig.engine(engineData, 'apa', 'en-US', 'html')

  const processResult = citeproc.processCitationCluster(
    {
      citationItems: data,
      properties: {
        noteIndex: insertIndex,
      },
    },
    citationPre,
    citationPost,
  )

  const citations = processResult[1].map((e) => {
    const [index, citation, citationId] = e
    return { citationId, index, citation }
  })

  console.log({ engineData, insertIndex, citationPre, citationPost, processResult, citations })

  return citations
}

/**
 * returns a book
 */
function data1() {
  return [
    {
      "type": "book",
      "title": "Immunology, Infection, and Immunity (Hardcover)",
      "author": [
        {
          "given": "Pier",
          "family": "Gerald"
        },
        {
          "given": "Lyczak",
          "family": "Jeffrey"
        },
        {
          "given": "Wetzler",
          "family": "Lee"
        },
        {
          "given": "ASM",
          "family": "Press"
        }
      ],
      "archive_location": "",
      "edition": "1",
      "volume": "",
      "number-of-volumes": "",
      "abstract": "With a focus on the relatedness of immunology and microbiology, Immunology, Infection, and Immunity covers both the foundation concepts of immunology, among the most exciting in modern biology and medicine, and their application to the real world of diseases and health. This new text combines clear narratives of how the immune system functions relying in many instances on supporting data from experiments. The editors use examples and illustrations depicting basic immunologic processes in conjunction with their role in infectious or other diseases in order to teach both basic and applied aspects of immunology. Ideally suited for upper division and graduate level students as well as medical and dental students with a good background in basic biology, biochemistry, genetics, and cell biology, the text complements traditional views and dogmas about immunology with today's cutting edge ideas and experimental data describing how the immune system works.",
      "note": "",
      "publisher-place": "",
      "issued": {
        "raw": "April 2004"
      },
      "number-of-pages": "718",
      "ISBN": "978-1555812461",
      "source": "",
      "URL": "",
      "year-suffix": "2004",
      "id": "b6c8ba8aa63b925c49fec55f8c89c937",
    }
  ]
}

/**
 * returns a webpage
 */
function data2() {
  return [
    {
      "type": "webpage",
      "title": "Brief introduction to Kudos",
      // empty author field seems to be the root of the bug
      "author": [],
      "URL": "https://www.youtube.com/watch?v=1i3tqPCalaA",
      "abstract": "You've published your article, but who's going to read and cite it? Our free service can help your publication rise to the top of the millions published every year, with simple steps including:- explaining: giving your publication a short title, a lay summary and an impact statement- enriching: linking related sources such as videos and presentations to your article- sharing: sending links via email, social media, websites and blogs- measuring: seeing the impact of these steps on metrics such as views and downloads of your work.",
      "note": "",
      "issued": {
        "raw": "2015/11/02"
      },
      "source": "",
      "year-suffix": "2014",
      "id": "2C3C5FB13E414632A098073469797D14",
    }
  ]
}
