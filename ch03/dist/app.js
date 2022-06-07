"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    changeAddress(newAddress) {
        console.log(`Changing address to ${newAddress}`);
    }
    giveDayOff() {
        console.log(`Giving a day off to ${this.name}`);
    }
    promote(percent) {
        this.giveDayOff();
        this.increasePay(percent);
    }
}
class ProductServie {
    getProducts() {
        return [];
    }
    getProductById(id) {
        return { id: 123, description: "Good product" };
    }
}
class MockProductServie {
    getProducts() {
        return [];
    }
    getProductById(id) {
        return { id: 123, description: "Not a real product" };
    }
}
function getProductService(isProduction) {
    if (isProduction) {
        return new ProductServie();
    }
    else {
        return new MockProductServie();
    }
}
const isProd = true;
const prodService = getProductService(isProd);
const products = prodService.getProducts();
