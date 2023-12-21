const products = [];

module.exports = class Product { 
    constructor(t) { //매개변수 : title 
        this.title = t //this.title을 인수로 수신함
    }
    save() { 
        products.push(this)
    }
    static fetchAll() { 
        return this.products
    }
}