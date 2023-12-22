//const products = [];//사용자가 입력한 data를 배열에 저장하지 않고 파일 시스템에서 저장

const fs = require("fs"); //node core module import
const path = require("path"); //경로 구축
module.exports = class Product {
	constructor(t) {
		//매개변수 : title
		this.title = t; //this.title을 인수로 수신함
		//this == Product 객체를 가리킴
	}
	save() {
		//products.push(this)
		const p = path.join(
			path.dirname(require.main.filename),
			"data",
			"products.json"
		);
	}
	static fetchAll() {
		return products;
	}
};
