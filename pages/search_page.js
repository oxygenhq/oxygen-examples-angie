module.exports = {

    searchPage: {
        url: 'https://automationbookstore.dev/',
        searchBar: 'id=searchBar',
        hiddenBooks: 'li.ui-screen-hidden',
        visibleBooks: 'li:not(.ui-screen-hidden)',

        open: function() {
            web.init()
            web.open(this.url)
        },

        search: function(query) {
            web.type(this.searchBar, query)
            web.waitForExist(this.hiddenBooks)
        },

        getNumberOfVisibleBooks: function() {
            return web.findElements(this.visibleBooks).length
        }
    }
}