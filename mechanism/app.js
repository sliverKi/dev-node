const http = require("http");
const routes = require('./routes')//내보낸 객체의 파일을 import

const { buffer } = require("stream/consumers");

console.log(routes.someText)

const server = http.createServer(routes.handler)//import한 요소를 사용

server.listen(3000);



/*http.createServer(rqListener())
//함수를 호출할때 중괄호를 적지 않고 함수 이름만 적는 경우,
//createServer에 rqListener이름을 가진 함수를 찾아 들어오는 모든 요청에 따라 실행하라
//~> 서버에 도달하는 모든 요청에 따라 실행하게 되며 createServer로 부터 실행하게 됌

//listen(): node.js가script를 바로 종료하지 않고, 계속 실행되면서 듣도록 함.
// on(): 특정eventListener를 들을 수 있도록 함,
//on('data'): 데이터 이벤트가 발생하는 데에 새 청크가 읽힐 준비가 될때 마다  버퍼가 도움을 준다.
//on('end'): 들어오는 요청 데이터 혹은 전반적인 요청을 분석한 후에 발생되어짐
//응답 발송은 이벤트 리스너 실행이 끝났다는 의미가 아니다.~> 응답이 발송 된 후에도 이벤트 리스너는 계속 실행된다.
//노드는 함수를 함수 안에 넣으면 안에 중첩된 함수를 나중에 실행이 되는데 이를 "비동기식"이라고 한다.
//함수 안에 넣은 함수가 항상 나중에 실행되는 것은 아니지만, 비동기식 코드를 만난경우 내부적으로 이벤트 리스너를 하나 추가한다.
//노드 js는 모든 리스너들을 내부적으로 관리 한다.
//if문의 조건을 충족하는 경우 곧바로 req.on('data')와 req.on('end')를 바로 실행하지 않고 이벤트 리스너에 등록을 하고 바로 다음 줄로 이동한다.
함수가 내부적으로 이벤트 이미터에 등록된 후*/
