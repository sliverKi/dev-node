const fs = require("fs");
const requestHandler = (req, res) => {

    const url = req.url 
    const method = req.method

    if (url === "/") {
        res.write("<html>");
        res.write("<header><title>Enter Messages</title></header>");
        res.write(
            "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
        );
        res.write("</html>");
        return res.end();
    }
    if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            console.log("chunk", chunk);
            body.push(chunk);
        });
    
        return req.on("end", () => { //return의 역할 : 'end' 리스너가 설정되면 즉시 호출 코드로 제어를 반환하여 동일한 함수 내의 후속라인의 실행을 방지한다.
            const parsedBody = Buffer.concat(body).toString();
            console.log("parsedBody", parsedBody);
            const message = parsedBody.split("=")[1];
            fs.writeFile("message.txt", message, (err) => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            }); //writeFileSync: message.txt file이 생성되기 전까지 코드 실행을 막음
        });
    }
    //console.log(req.url, req.method, req.headers);
    //process.exit()
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<header><title>My First Page</title></header>");
    res.write("<body><h1>Hello from my Node.js Server</h1></body>");
    res.write("</html>");
    res.end();
}


//export시에 
//module.exports= requestHandler//내보내기 

//방법2
module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
}

//방법3은 방법2와 동일함
//module.exports.handler = requestHandler
//module.exports.someText = 'some hard coded text'

