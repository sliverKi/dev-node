const http = require("http");
const express = require("express");

const app = express();
app.use((req, res, next) => {
    console.log("In the middleware");
    //res.send("<h2>First useFunction</h2>");
    req.message = "<h2>First useFunction</h2>"
    next();
});
app.use((req, res, next) => {
    console.log("In another middleware"); 
    //res.send('<h2>Second useFunction</h2>')
    const fullMessage = req.message + "<h2>Second useFunction</h2>"
    res.send(fullMessage);
});
//use(): 새로운 미들웨어 함수 추가 가능
//send(): 서버에 응답을 보낼 수 있음 ~> write()와 사용 비슷
//기본 응답 헤더를 text/html로 자동으로 default설정 해줌, 
//send() + write()를 혼용하여 사용 할 수 없음


app.listen(3000)
/*shortcut: app.listen(3000)
const server = http.createServer(app);
server.listen(3000);*/
