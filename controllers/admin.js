const Product = require("../models/product"); //import class Product

exports.getAddProduct = (req, res, next) => {
	//res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
	res.render("admin/edit-product", {
		//file-path
		docTitle: "Add-Product",
		path: "/admin/add-product", //nav-bar
		editing: false,
	});
};

exports.postAddProduct = (req, res, next) => {
	//products.push({ title: req.body.title });//model에 이미 정의 했기 때문에 더이상 controller에서 필요가 없어짐
	const title = req.body.title;
	const imageUrl = req.body.imageUrl;
	const description = req.body.description;
	const price = req.body.price;
	const product = new Product(null, title, imageUrl, description, price); //model에 정의한 class Product을 이용하여 객체를 생성함, keyword : new + class
	
	product.save()
		.then(() => { 
			res.redirect("/");
		})
		.catch(err => console.log(err)); //생성환 객체를 save method를 통해, 배열에 저장
	
};
exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render("admin/products", {
			prods: products,
			docTitle: "Admin Products",
			path: "/admin/products",
		});
	}); //저장된 배열내 data call
};
exports.getEditProduct = (req, res, next) => {
	const editMode = req.query.edit;
	if (!editMode) { 
		console.log("Failed to edit")
		//return res.redirect('/')
	}
	const prodId = req.params.productId
	Product.findById(prodId, product => { 
		if (!product) { 
			return res.redirect('/')
		}
		res.render("admin/edit-product", {
			docTitle: "Edit Product",
			path: "/admin/edit-product",
			editing: editMode,
			product:product
		});
	})
	
};
exports.postEditProduct = (req, res, next) => { 
	const prodId = req.body.productId
	const updatedTitle = req.body.title;
	const updatedImageUrl = req.body.imageUrl;
	const updatedDescription = req.body.description;
	const updatedPrice = req.body.price;
	const updatedProduct = new Product(prodId, updatedTitle, updatedImageUrl, updatedDescription, updatedPrice); //model에 정의한 class Product을 이용하여 객체를 생성함, keyword : new + class
	updatedProduct.save(); //생성환 객체를 save method를 통해, 배열에 저장
	res.redirect("/admin/products");
}

exports.postDeleteProduct = (req, res, next) => { 
	const prodId = req.body.productId
	Product.deleteById(prodId)
	res.redirect('/admin/products')
}