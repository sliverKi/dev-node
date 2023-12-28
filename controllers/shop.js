//const products = [];//model에 이미 정의 했기 때문에 더이상 controller에서 필요가 없어짐
const Product = require("../models/product"); //import class Product

exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render("shop/product-list", {
			prods: products,
			docTitle: "All Products",
			path: "/products",
		});
	}); //저장된 배열내 data call
};

exports.getProductId = (req, res, next) => {
	const prodId = req.params.productId//params객체는 productId에 접근 가능 ~> routes에서 :뒤에 'productId'라는 이름으로 작성하였기 때문 
	//console.log("prodID", prodId)//동적 세그먼트 추출
	Product.findById(prodId, product => { 
		//console.log("getProductID: ",product)
		res.render("shop/product-detail", {
			docTitle: product.title,
			product: product,
			path: '/products'
		})
	})
}

exports.getIndex = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render("shop/index", {
			prods: products,
			docTitle: "Shop",
			path: "/",
		});
	}); //저장된 배열내 data call
};

exports.getCart = (req, res, next) => {
	res.render("shop/cart", {
		docTitle: "My Cart",
		path: "/cart",
	});
};

exports.postCart = (req, res, next) => {
	const prodId = req.body.productId;
	console.log(prodId)
	res.redirect("/cart");

};



exports.getCheckout = (req, res, next) => {
	res.render("shop/checkout", {
		docTitle: "Checkout",
		path: "/checkout",
	});
};

exports.getOrders = (req, res, next) => {
	res.render("shop/orders", {
		docTitle: "My Orders",
		path: "/orders",
	});
};
