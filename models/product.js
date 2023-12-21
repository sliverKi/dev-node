const products = [];

module.exports = class Product { 
    constructor(t) { //매개변수 : title 
        this.title = t //this.title을 인수로 수신함
        //this == Product 객체를 가리킴
    }
    save() { 
        products.push(this)
    }
    static fetchAll() { 
        return products
    }
}