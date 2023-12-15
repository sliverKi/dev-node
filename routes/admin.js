const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../util/path')

const products = []
router.get('/add-product', (req, res, next) => { 
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product', {docTitle: 'Add-Product'})
   


})

router.post('/add-product', (req, res, next) => {    
    products.push({title: req.body.title})
    res.redirect('/')
})

exports.routes = router
exports.products = products
/* outSourcing-Routing
'/add-product' == '/admin/add-product'(GET Method)
'/product' => '/admin/add-product'로 변경 가능(POST Method) 
why~> router.X 처리하는 http method가 다르기 때문 => http Method가 다르면, 서로 같은 경로를 이용할 수 있음
*/