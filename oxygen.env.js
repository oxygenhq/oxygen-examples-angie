module.exports = {
    default: {
        baseUrl: "https://automationbookstore.dev/",
        boolTestA: true,
        boolTestB: false,
        intTest: 4,
        intStrTest: "5",
        floatTest: 454.454,
        regex: /.*/
    },
    prod: {
        baseUrl: "http://prod.automationbookstore.dev",
        boolTestA: true,
        boolTestB: false,
        intTest: 4,
        intStrTest: "5",
        floatTest: 454.454,
        regex: /.*/
    }
};