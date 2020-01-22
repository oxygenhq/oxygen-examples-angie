web.init()
web.network.start();
web.open('https://automationbookstore.dev/')
web.network.assertUrl('https://automationbookstore.dev/js/products.js');
web.network.assertStatusCode('https://automationbookstore.dev/js/products.js', 200);
web.network.assertResponseContent('https://automationbookstore.dev/js/products.js', 'product_data');
