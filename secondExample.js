import { plugins } from '@citation-js/core'
import '@citation-js/plugin-csl'
import { data1, noAuthorData, data3, data4, data5 } from './dummyData'
const cslConfig = plugins.config.get('@csl')
let citeproc
let engineData = []
let currentCitations = []

/**
 *  imagine that a user can cite data at any time at any position in the document
 *  and the citations will update accordingly to be correct especially when it is 
 *  a numeric citation style or Vancouver style.
 */
export function runSecondExample({ injectUnknownAuthorToNoAuthorData = false, noAuthorDataIsWithOtherDataThatHasAuthor = false } = {}) {
    currentCitations = cite(data1(), 0)
    console.log('1', currentCitations)

    /**
     *  this will output the citations with `noAuthorData`, but the citation
     *  of `noAuthorData` will be excluded somehow after this citation is 
     *  passed through `citationPre` or `citationPost` to `processCitationCluster`
     */
    currentCitations = cite(noAuthorData({ injectUnknownAuthorToNoAuthorData, noAuthorDataIsWithOtherDataThatHasAuthor }), 1)
    console.log('2', currentCitations)

    /**
     *  we would expect these to include the citation from above,
     *  but the one from '2' is gone.
     */
    currentCitations = cite(data3(), 1)
    console.log('3', currentCitations)
    currentCitations = cite(data4(), 0)
    console.log('4', currentCitations)
    currentCitations = cite(data5(), 1)
    console.log('5', currentCitations)
}

/**
 * make a new citation and return all citations
 */
function cite(data, insertIndex) {
    const { citationPre, citationPost } = calcCitationPreAndPost(currentCitations, insertIndex)
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

    const newCitationsLengthAfterProcess = citationPre.length + citationPost.length + 1
    if (citations.length !== newCitationsLengthAfterProcess) {
        console.warn('we lost a citation afterwards...', { citationPre, citationPost, citations })
    }

    return citations
}



function calcCitationPreAndPost(currentCitations, newCitationInsertIndex) {
    const citationPre = []
    const citationPost = []

    for (let i = 0; i < currentCitations.length; i++) {
        const entry = currentCitations[i]
        if (entry.index < newCitationInsertIndex) {
            citationPre.push([entry.citationId, entry.index])
        }
        else if (entry.index >= newCitationInsertIndex) {
            const pushOneIndex = entry.index + 1
            citationPost.push([entry.citationId, pushOneIndex])
        }
    }

    // console.log({ citationPre, citationPost })

    return { citationPre, citationPost }
}
