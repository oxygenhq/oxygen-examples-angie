mob.transaction('initialize Device')
mob.init();
mob.transaction('Open URL of store')
mob.open('http://automationpractice.com/index.php');
mob.transaction('Expand categories in mobile view')
mob.click('//div[@id=\'block_top_menu\']/div');
mob.transaction('Select T-Shirts category')
mob.click('(//a[contains(text(),\'T-shirts\')])[2]');
mob.transaction('Click on search field')
mob.click('id=search_query_top');
mob.transaction('Type "test" in search field')
mob.type('id=search_query_top', 'test');
mob.transaction('Click Search button')
mob.click('name=submit_search');
mob.transaction('Verify that message: No results were found for your search test')
mob.assertText('//div[@id=\'center_column\']/p', 'No results were found for your search "test"');