module.exports = {
    default: {
        baseUrl: 'https://automationbookstore.dev/',
        boolTestA: true,
        boolTestB: false,
        intTest: 4,
        intStrTest: "5",
        contentFilePath:"\\\\test\\DATA\\USERS\\PUBLIC\\Cloudbeat_QA\\test\\QA\\",              
        writeToFileFilepath: "D:\\Project\\Tashlumim\\",
        floatTest: 454.454,
        regex: /.*/,
        test: "foo\bar",
        test2: "foo2\\bar2"
        test3: "foo3/bar3",
        test4: "foo4//bar4"
    },

    new2: {
        baseUrl: "http://prod.automationbookstore.dev3",
        boolTestA: true,
        boolTestB: false,
        intTest: 4,
        intStrTest: "5",
        contentFilePath:"\\\\test\\DATA\\USERS\\PUBLIC\\Cloudbeat_QA\\test\\QA\\",
        writeToFileFilepath: "D:\\Project\\Tashlumim\\",
        floatTest: 454.454,
        regex: /.*/,
        quote_test_double: "foo\"bar",
        quote_test_single: 'foo"bar'
       // quote_test_backticks: `foo"bar`,
        //escaped_quote_test_single: 'foo\'bar',
       // escaped_chars: "\r\nfoo\r\nsdfsd\tdsfds",


       // func: function(a) {return a+5;}

        //quote_test_single_double: 'foo"bar\"'                   // this is invalid
    }
};