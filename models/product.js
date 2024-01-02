const Cart = require("./cart"); //import cart model 



module.exports = class Product {
	constructor(id, title, imageUrl, description, price) {
		this.id = id;
		this.title = title; //this.title을 인수로 수신함
		this.imageUrl = imageUrl;
		this.description = description;
		this.price = price;
		//this == Product 객체를 가리킴
	}
	save() {
		
	}
	static deleteById(id) {
		
	}
	static fetchAll(cb) {
		
	}

	static findById(id, cb) {
		
	}
};
