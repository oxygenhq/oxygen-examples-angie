module.exports = {
    default: {
        baseUrl: "https://automationbookstore.dev/",
        boolTestA: true,
        boolTestB: false,
        intTest: 4,
        intStrTest: 5,
        floatTest: 454.454,
        complexTest: { a: 4, b: true, c: false, d: "blalala"}
    },
    prod: {
        baseUrl: "http://prod.automationbookstore.dev",
        boolTestA: true,
        boolTestB: false,
        intTest: 4,
        intStrTest: 5,
        floatTest: 454.454,
        complexTest: { a: 4, b: true, c: false, d: "blalala"}
    }
};