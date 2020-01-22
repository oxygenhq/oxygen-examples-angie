// add WinAppDriver script
web.init()
web.type('id=searchBar', 'Agile Testing')
web.waitForExist('li.ui-screen-hidden')
eyes.checkWindow('Agile Testing Books 1')