# week7
## 웹프로그래밍 과제 Watchify
- 기존 방식은 코드가 수정될 때마다 `npm run build`를 다시 해야한다.
- 터메널에 `npm install --save-dev watchify` 명령
- --save--dev 옵션은 개발용 (dependencies 대신 devDependencies에 추가된다.)
- `package.json` 파일의  `scripts` 안에 아래 줄 입력
```
"dev": "watchify ./client/app.jsx -t babelify --outfile ./public/js/app.js -v"
```
- 터미널에서 `npm run dev` 실행하면, 코드가 수정될 때마다 저장하면 자동으로 build 된다.
- `npm run dev` 실행 중인 터미널을 켜둔 채로 놔두고 다른 터미널에서 `npm start`로 서버 켜기.
> (참고) https://velog.io/@2mingyu/JavaScript-%EB%B0%8F-React-%EA%B0%9C%EB%B0%9C%EC%9D%98-%EC%A3%BC%EC%9A%94-%EB%8F%84%EA%B5%AC-%EB%B0%8F-%EA%B0%9C%EB%85%90