const express = require("express");
const bodyParser = require("body-parser")
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes)//outSourcing-Routing
app.use(shopRoutes)//outSourcing-Routing

app.use((req, res, next) => { 
    statusCode = 404
    res.status(statusCode).send('<h1>404 Page NotFound</h1>')
})
app.listen(3000)

/* outSourcing-Routing

시작경로를 공유하는 경우가 있다~> 
/admin/add-product  admin/*시작 라우티 경로 동일 
/admin/product
*/