const Cart = require("./cart"); //import cart model
const db = require("../util/database");

module.exports = class Product {
	constructor(id, title, imageUrl, description, price) {//OBJ definition
		this.id = id;
		this.title = title; //this.title을 인수로 수신함
		this.imageUrl = imageUrl;
		this.description = description;
		this.price = price;
		//class 내부에 존재하는 this ==> 해당 class 객체(=Product 객체)
	}
	save() {}
	static deleteById(id) {}
	static fetchAll(cb) {
		return db.execute("SELECT * FROM products")
	}

	static findById(id, cb) {}
};
