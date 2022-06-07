# Development

## github 해당 원격저장소 연결(SSH) 및 초기(?) push

$ git remote add origin '원격저장소 주소(SSH)'

## 처음 한번만 하면 됨

$ git push -u origin master

## Using source maps

### node_modules 생성

$ npm i

### entry point

$ dist/index.html

## Choosing a Development tool

### node_modules 생성

$ npm i

### entry point

$ dist/index.html

### Using Watch Mode

### Using webpack-dev-server

webpack-dev-server가 localhost:8080의 dist 폴더에서 파일을 제공하도록 설정

```bash
// webpack.config.js
// 생략
module.exports = {
  // 생략
  devServer: {
    static: "./dist",
  },
  // 생략
};
```

single HTML 페이지에 1개 이상의 entry point가 있으므로 "optimization.runtimecheck: 'single'"을 추가

```bash
// webpack.config.js
// 생략
module.exports = {
  // 생략
  optimization: {
    runtimeChunk: 'single',
  },
  // 생략
};
```

dev server를 쉽게 실행하기 위해 스크립트 추가

```bash
// package.json

{
   // 생략
   "scripts": {
     // 생략
     "start": "webpack serve --open",
   },
   // 생략
}
```
