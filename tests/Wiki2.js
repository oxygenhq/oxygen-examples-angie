web.init();
web.open('https://www.wikipedia.org/');

//               id: id=searchInput
//             name: name=search
// xpath:attributes: //input[@id=\'searchInput\']
// xpath:idRelative: //div[@id=\'search-input\']/input
//   xpath:position: //div/input
//              css: css=#searchInput
web.type('id=searchInput', '${term}');
// xpath:attributes: //button[@type=\'submit\']
// xpath:idRelative: //form[@id=\'search-form\']/fieldset/button
//   xpath:position: //fieldset/button
//              css: css=.pure-button
web.click('//button[@type=\'submit\']');

//web.assertTitle('Test (assessment) - Wikipedia');

