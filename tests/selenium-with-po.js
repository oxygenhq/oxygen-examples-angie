//var po = require('../pages/search_page.js');
const page = po.searchPage;

log.info("Running against " + page.url);
log.info(params.text)
log.info("${boolTestA}");
log.info("${boolTestB}");
log.info("${floatTest}");
log.info("${intStrTest}");
log.info("${intTest}");
log.info("${regex}");

log.info("${test}"); // not working. types "foar"
log.info("${test2}");  // works

 
page.open();
page.search("${test}");
const visibleBooks = page.getNumberOfVisibleBooks();
assert.equal(visibleBooks, 2, "There should only be one book visible");