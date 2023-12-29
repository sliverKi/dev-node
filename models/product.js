//const products = [];//사용자가 입력한 data를 배열에 저장하지 않고 파일 시스템에서 저장

const fs = require("fs"); //node core module import
const path = require("path"); //경로 구축

const p = path.join(
	path.dirname(require.main.filename),
	"data",
	"products.json"
);

const getProductsFromFile = (cb) => {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}
	});
};

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
		//products.push(this)
		getProductsFromFile((products) => {
			if (this.id) {
				const existingProductIndex = products.findIndex(
					(product) => this.id === product.id
				);
				const updatedProducts = [...products];
				updatedProducts[existingProductIndex] = this;
				fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
					console.log(err);
				});
			} else {
				this.id = Math.floor(Math.random() * (1000 - 1) + 1).toString();
				products.push(this);
				fs.writeFile(p, JSON.stringify(products), (err) => {
					console.log(err);
				});
			}
		});
	}
	static deleteById(id) {
		getProductsFromFile((products) => {
			//모든 제품을 불러옴
			const updatedProducts = products.filter(product => product.id !== id);//삭제하려는 상품의 아이디와 다른 상품들만 유지 
			fs.writeFile(p, JSON.stringify(updatedProducts), (err) => { 
				if (err) { 
					console.log(err)
				}
			})
			
		});
	}
	static fetchAll(cb) {
		getProductsFromFile(cb);
	}

	static findById(id, cb) {
		//id에 해당하는 제품 겁색을 마치면 실행할 callback함수 실행
		getProductsFromFile((products) => {
			//모든 제품을 불러옴
			const findProd = products.find((p) => p.id === id);
			console.log("findByID: ", findProd);
			cb(findProd);
		});
	}
};
