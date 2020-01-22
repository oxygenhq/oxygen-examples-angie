module.exports = {

    searchPage: {
        url: 'https://automationbookstore.dev/',
        searchBar: 'id=searchBar',
        hiddenBooks: 'li.ui-screen-hidden',
        visibleBooks: 'li:not(.ui-screen-hidden)',

        open: function() {
            ox.module.web.init()
            ox.module.web.open(this.url)
        },

        search: function(query) {
            ox.module.web.type(this.searchBar, query)
            ox.module.web.waitForExist(this.hiddenBooks)
        },

        getNumberOfVisibleBooks: function() {
            return ox.module.web.findElements(thisvisibleBooks).length
        }
    }
}