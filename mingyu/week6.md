# week6
## 웹프로그래밍 과제 세팅
- github repository 생성
- 과제 코드 내려받기
- .gitignore 작성 (node_modules, .DS_Store)
- 코드 작성은 수업시간 설명 좀 듣고 와야 할 듯
## 코드 구조
- ./client/app.jsx : 여기에 코드 작성
- ./public/css/style.css : 여기에 스타일 코드 작성
- ./public/js/app.js : 무시해도 됨
- ./public/index.html : 무시해도 됨
- ./app.js : 무시해도 됨 (?)
##
package.json 파일에  
  "scripts": {  
    "build": "browserify ./client/app.jsx -t babelify --outfile ./public/js/app.js",  
    "start": "node app.js"  
  },  
위와 같이 작성되어 있다.  
npm build 명령 시 ./client/app.jsx 코드를 브라우저에서 실행하도록 ./public/js/app.js 로 변환  
npm start 명령 시 ./app.js 에서 Node.js 실행