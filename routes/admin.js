const express = require('express')
const router = express.Router()

router.get('/add-product', (req, res, next) => { 
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>')
})

router.post('/add-product', (req, res, next) => { 
    console.log(req.body)//사용자가 보낸 내용 추출~> undefined가 출력이 돼는 이유: req.은 들어오는 요청 본문을 따로 분석하려 하지 않음
    res.redirect('/')
})

module.exports = router

/* outSourcing-Routing
'/add-product' == '/admin/add-product'(GET Method)
'/product' => '/admin/add-product'로 변경 가능(POST Method) 
why~> router.X 처리하는 http method가 다르기 때문 => http Method가 다르면, 서로 같은 경로를 이용할 수 있음
*/