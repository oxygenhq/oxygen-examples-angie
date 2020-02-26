var po = require('../pages/search_page.js');
const page = po.searchPage;

log.info("Running against " + page.url);

page.open();
page.search("Agile Testing");
const visibleBooks = page.getNumberOfVisibleBooks();
assert.equal(visibleBooks, 2, "There should only be one book visible");