const products = [];

exports.getAddProduct = (req, res, next) => {
	//res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
	res.render("add-product", {
		docTitle: "Add-Product",
		path: "/admin/add-product",
		formCSS: true,
        productCSS: true,
        activeAddProduct: true
	});
}

exports.postAddProduct = (req, res, next) => {
	products.push({ title: req.body.title });
	res.redirect("/");
}