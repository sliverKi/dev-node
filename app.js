const express = require("express");

const app = express();
/*app.use((req, res, next) => {
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
*/

app.use((req, res, next)=> {//요청이 어디로 향하든 본문 분석이 이루어지도록 하기 위함
    
})

app.use('/add-product', (req, res, next) => { 
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>')
})

app.use('/product', (req, res, next) => { 
    console.log(req.body)//사용자가 보낸 내용 추출~> undefined가 출력이 돼는 이유: req.은 들어오는 요청 본문을 따로 분석하려 하지 않음
    res.redirect('/')
})

app.use('/', (req, res, next) => { 
    res.send('<h2>Second middleware</h2>')
})

app.listen(3000)
/*shortcut: app.listen(3000)
const server = http.createServer(app);
server.listen(3000);*/

//use(): 새로운 미들웨어 함수 추가 가능
//send(): 서버에 응답을 보낼 수 있음 ~> 둘다 무언가를 전송한다는 점에서 write()와 사용 비슷
//send()는 end()와 동일한 기능을 수행함
//기본 응답 헤더를 text/html로 자동으로 default설정 해줌, 
//send() + write()를 혼용하여 사용 할 수 없음
