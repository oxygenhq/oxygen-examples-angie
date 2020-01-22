web.init()
web.open('https://automationbookstore.dev/')
web.type('id=searchBar', 'Agile Testing')
web.waitForExist('li.ui-screen-hidden')
var visibleBooks = web.findElements('li:not(.ui-screen-hidden)').length
assert.equal(visibleBooks, 1, "There should only be one book visible")