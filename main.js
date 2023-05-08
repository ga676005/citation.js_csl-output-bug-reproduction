import { runFirstExample } from "./firstExample";
import { runSecondExample } from "./secondExample";

/**
 * @type {'bug' | 'normal'}
 */
const firstExampleCase = 'normal'
// runFirstExample(firstExampleCase)


// set either flags to true won't have the problem
// these two flags are just a way to demonstrate what the problem is.
// The comments only make sense as the flags don't exist.
runSecondExample({
  injectUnknownAuthorToNoAuthorData: false,
  noAuthorDataIsWithOtherDataThatHasAuthor: false
})