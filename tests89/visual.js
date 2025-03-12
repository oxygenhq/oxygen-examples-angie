web.init()
eyes.init('web');
web.open('https://automationbookstore.dev/')
web.type('id=searchBar', 'Agile Testing')
web.waitForExist('li.ui-screen-hidden')
eyes.checkWindow('Oxygen: Agile Testing book')