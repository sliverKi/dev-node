const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const expressHbs = require("express-handlebars");

const app = express();
app.engine(
	"handlebars",
	expressHbs({
		layoutsDir: "views/layouts",
		defaultLayout: "main-layout",
        extname: "handlebars",
        layout: false,
	})
);
//extname: 파일 경로의 확장자명을 설정하여, node engine에게 알림
//if not set extname~> express doesn't know which file choose...

//내장되어 있지 않은 template engine사용 <-> pug:내장 template-engine
app.set("view engine", "handlebars");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminData.routes); //outSourcing-Routing
app.use(shopRoutes); //outSourcing-Routing

app.use((req, res, next) => {
	//res.status(404).sendFile(path.join(__dirname, 'views', 'page-notFound.html'))
	res.status(404).render("404", { docTitle: "NotFound" }); //shop template rendering
});
app.listen(3000);

/* outSourcing-Routing

시작경로를 공유하는 경우가 있다~> 
/admin/add-product  admin/*시작 라우티 경로 동일 
/admin/product
*/
