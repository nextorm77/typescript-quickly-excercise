# webpack-typescript

## Basic Setup

### .babelrc 설명

@babel/preset-env 는 @babel/preset-ES6, @babel/preset-es2016, @babel/preset-es2017 과 정확히 동일
즉, ECMA스크립트 2015, 2016 및 2017에 추가된 기능은 ES5 버전으로 변환

```javascript
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-typescript"
    ]
}
```

패키지 설치 오류 발생시 'package-lock.json' 삭제 후 진행 시도

```bash
npm i
```

### node_modules 생성 방법

패키지 설치 오류 발생시 'package-lock.json' 삭제 후 진행 시도

```bash
npm i
```

## 바벨 실행 명령어

```bash
npm run babel
```
