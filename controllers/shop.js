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

exports.getCheckout = (req, res, next) => {
	res.render("shop/checkout", {
		docTitle: "Checkout",
		path: "/checkout",
	});
};
