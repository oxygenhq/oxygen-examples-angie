web.transaction('Initialization');
web.init()
log.info(env.contentFilePath)
web.transaction('Homepage');
web.open('https://automationbookstore.dev/')

web.transaction('Search'); 
web.type('id=searchBar', env.contentFilePath)
web.setTimeout(1000)
web.assertTitle('sds')
web.waitForExist('li.ui-screen-hidden')
var visibleBooks = web.findElements('li:not(.ui-screen-hidden)').length
assert.equal(visibleBooks, 1, "There should only be one book visible")
