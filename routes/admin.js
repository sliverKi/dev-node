const express = require('express')
const router = express.Router()

router.get('/add-product', (req, res, next) => { 
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>')
})

router.post('/product', (req, res, next) => { 
    console.log(req.body)//사용자가 보낸 내용 추출~> undefined가 출력이 돼는 이유: req.은 들어오는 요청 본문을 따로 분석하려 하지 않음
    res.redirect('/')
})

module.exports = router