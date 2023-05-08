import { plugins } from '@citation-js/core'
import '@citation-js/plugin-csl'
import { data1, noAuthorData as data2 } from './dummyData'
const cslConfig = plugins.config.get('@csl')
let citeproc
let engineData = []

/**
 * Runs the first example with either "bug" or "normal" case.
 *
 * @param {"bug" | "normal"} whichCase - The type of case to run.
 */
export function runFirstExample(whichCase) {
    if (whichCase === 'normal')
        normalCase()

    else if (whichCase === 'bug')
        bugCase()

    else
        throw new Error('no such case', whichCase)

}

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

