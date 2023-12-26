//const products = [];//model에 이미 정의 했기 때문에 더이상 controller에서 필요가 없어짐 
const Product = require('../models/product')//import class Product



exports.getProduct = (req, res, next) => {
    Product.fetchAll((products) => { 
        res.render("shop/product-list", {
            prods: products,
            docTitle: "ProductList",
            path: "/",
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true,
            
        });
    });//저장된 배열내 data call
}


