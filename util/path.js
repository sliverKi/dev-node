const path = require('path')
module.exports = path.dirname(require.main.filename)

/*helper 함수를 통해 상위 디렉토리의 경로를 얻음
path.dirname(require.main.filename) : 상위 디렉토리로 가는 경로를 구축하는데 도움을 줌 
*/