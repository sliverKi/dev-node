const Product = require('../models/product')//import class Product

exports.getAddProduct = (req, res, next) => {
	//res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
	
    res.render("admin/add-product", {
		docTitle: "Add-Product",
		path: "/admin/add-product",
		formCSS: true,
        productCSS: true,
        activeAddProduct: true
	});
}

exports.postAddProduct = (req, res, next) => {
	//products.push({ title: req.body.title });//model에 이미 정의 했기 때문에 더이상 controller에서 필요가 없어짐 
	const product = new Product(req.body.title)//model에 정의한 class Product을 이용하여 객체를 생성함, keyword : new + class 
    product.save()//생성환 객체를 save method를 통해, 배열에 저장
    res.redirect("/");
}
exports.getProducts = (req, res, next) => { 
    Product.fetchAll((products) => {
		res.render("admin/products", {
			prods: products,
			docTitle: "Admin Products",
			path: "/admin/products",
		});
	}); //저장된 배열내 data call
}