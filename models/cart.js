const fs = require("fs"); //파일을 읽기 위해 추가할 모듈
const path = require("path"); //파일의 경로를 구축하는 경로 도우미

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");

module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(fileContent); //Json data -> OBJ
            }
            //기존 또는 이전 장바구니를 파일에서 불러온 다음, 이를 분석하여 해당 ㅂ
            //제품이 있는지 없는지 확인하여 기존제품을 찾고 새로운 제품을 추가하거나
            //수량증가
            const existingProductIndex = cart.products.findIndex(
                (product) => product.id === id
            );
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty += 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice += +productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        });
    }
}
