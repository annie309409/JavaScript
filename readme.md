# javascript

---

# 자바스크립트 사용법

## 개요

### 자바스크립트를 실행하는 방법

1. [인라인](#인라인)
2. [내부](#내부)
3. [외부](#외부)

### 인라인

- 특정 html요소에 따른 이벤트 속성으로 자바스크립트 코드가 언제 실행할지를 지정함

```html
<button type="button" onclick="alert('헬로월드')">hello maker</button>
```

### 내부

head나 body에 script라는 태그 안에 실행할 자바스크립트 코드를 작성함
그런데, head안에 스크립트를 작성히 브라우저가 body의 html코드를 읽기전에 스크립트 실행

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <script>
      console.log("helo world!!");
    </script>
  </head>

  <body></body>
</html>
```

반면, body안에서 실행하면 브라우저 화면이 다 뜬채로 스크립트가 실행되므로 페이지 로딩속도가 빨라짐

```html
<!DOCTYPE html>
<html lang="ko">
  <head> </head>
  <body>
    <script>
      console.log("helo world!!");
    </script>
  </body>
</html>
```

### 외부

자바스크립트 코드가 포함된 파일을 작성하고 이것을 head 혹은 body에 참조하도록 하는 방식

```html
<!DOCTYPE html>
<html lang="ko">
  <head> </head>
  <body>
    <script src="./js/hello.js"></script>
  </body>
</html>
```

./js/hello.js

```javascript
console.log("helo world!!");
```

## 콘솔에서 자바스크립트 실행 및 디버깅
