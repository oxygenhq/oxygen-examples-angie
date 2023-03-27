//var po = require('../pages/search_page.js');
const page = po.searchPage;
var cc = po.bla();

log.info("Running against " + page.url);
log.info("EnvA:" + params.boolTestA);
log.info("EnvB:" + params.boolTestB);
page.open();
page.search("Agile Testing");
const visibleBooks = page.getNumberOfVisibleBooks();
assert.equal(visibleBooks, 2, "There should only be one book visible");