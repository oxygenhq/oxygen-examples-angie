web.init();
web.open('https://www.wikipedia.org/');
//               id: id=searchInput
//             name: name=search
// xpath:attributes: //input[@id=\'searchInput\']
// xpath:idRelative: //div[@id=\'search-input\']/input
//   xpath:position: //div/input
//              css: css=#searchInput
web.type('id=searchInput', 'testing');
// xpath:idRelative: //form[@id=\'search-form\']/fieldset/button/i
//   xpath:position: //fieldset/button/i
//              css: css=.svg-search-icon
web.click('//form[@id=\'search-form\']/fieldset/button/i');
