const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");
const adminData = require("./admin");
const shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProductId)//`:`뒤에 설정한 이름이 params객체에서 데이터를 추출할때 사용하는 이름이 됨
router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart)
router.post("/cart-delete-item", shopController.postCartDeleteProduct)
router.get("/checkout", shopController.getCheckout);
router.get("/orders", shopController.getOrders)

module.exports = router;
/*sendFile(): 콘텐츠 유형을 자동으로 응답헤더로 설정함
__dirname: 운영체제의 절대경로를 이 프로젝트의 폴더로 고정
__ :  Nodejs에서 제공하는 전역변수
path.join(): 자동으로 window, linux에서 작동하는 방식으로 경로 생성해줌
*/
