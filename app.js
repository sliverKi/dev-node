const express = require("express");
const bodyParser = require("body-parser")
const path = require('path')
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminData.routes)//outSourcing-Routing
app.use(shopRoutes)//outSourcing-Routing

app.use((req, res, next) => { 
   
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-notFound.html'))

})
app.listen(3000)

/* outSourcing-Routing

시작경로를 공유하는 경우가 있다~> 
/admin/add-product  admin/*시작 라우티 경로 동일 
/admin/product
*/