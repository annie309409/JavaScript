# javascript
1. [자바스크립트 사용방법](#자바스크립트-사용법)
   1. [인라인](#인라인)
   2. [내부](#내부)
   3. [외부](#외부)
   

2. [자바스크립트 자료형](#자바스크립트-자료형)
   1. [변수](#변수--variable-)
   2. [상수](#상수--constant-)

# 자바스크립트 사용법
## 개요
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


# 자바스크립트 자료형
## 변수와 상수
### 변수(variable)
*   데이터를 담는 그릇
```javascript
    var 변수명 = 초기값;
    let 변수명 = 초기값;
```
* 차이점 (선언에 따른 차이: 오류 발생 vs 발생하지 않음)
```javascript
      var z;
      let a;
      
      document.write(`var z 의 값은 ${z} <br>`);
      document.write(`let a 의 값은 ${a} <br>`);
      
      var z =10;
      let a =10;
      document.write(`var z 의 값은 ${z} <br>`);
      document.write(`let a 의 값은 ${a} <br>`);

```
let a의 경우 하단과 같은 오류 발생
![오류이미지](./img/error.png)

>변수 선언시 var이나 let(ES6에서 추가)을 사용
실무에서는 오류를 최소화하기 위해 let사용을 추천!
자바스크립트에서는 각 문장의 끝은 ;으로 마무리해야 함

>변수에 내용 없이 실행하면 undifiend가 출력됨.
>> 예시)


### 상수(constant)
* 변하지 않는 값을 담는 그릇
```javascript
    const 상수명 = 값;
```

### 예시 
```javascript
    let n = prompt('값을 입력해주세요!',0);
    let 원주율 = 0;
    const pi = 3.14;
    
    function pI(n,pi){
        원주율 =  pi * n * n;
    }

```


