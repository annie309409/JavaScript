# javascript
1. [자바스크립트 사용방법](#자바스크립트-사용법)
   1. [인라인](#인라인)
   2. [내부](#내부)
   3. [외부](#외부)
   

2. [자바스크립트 자료형](#자바스크립트-자료형)
   1. [변수](#변수--variable-)
   2. [상수](#상수--constant-)
   3. [숫자형](#숫자) 
   4. [문자형](#문자)
   5. [참/거짓](#Boolean)
   6. [객체형](#객체형--object-)
   

3. [자바스크립트 연산자](#자바스크립트-연산자)

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
let a의 경우 하단과 같은 오류 발생<br>
![오류이미지](./img/error.png)

>변수 선언시 var이나 let(ES6에서 추가)을 사용
실무에서는 오류를 최소화하기 위해 let사용을 추천!
자바스크립트에서는 각 문장의 끝은 ;으로 마무리해야 함

>변수에 내용 없이 실행하면 undifiend가 출력됨.
```javascript
   var z;
   let a;
   document.write(`var z 의 값은 ${z} <br>`);
   document.write(`let a 의 값은 ${a} <br>`);
```
>결과 <br>
>![결과이미지](img/result5.png)

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

## 숫자 
### Numnber
* 정수, 실수등을 다룰 수 있음
* 일반적인 숫자 외에 추가적으로 NaN(not a number), infinity/-infinity 등의 특수 수자값 사용가능 
```javascript
   let o=1;
   document.write(`y / 0 =${ o / 0}<br>`);
   let k ='hello';
   document.write(`y * k =${ o * k}<br>`);
```
> 결과<br>
> ![결과이미지](img/infinite.png)
 


### Bigint
* 기존 정수보다 더 많은범위를 다룰 수 있음

```javascript
   let j = 12132245646545646548787987445645645645456465464646546464654555555555555555555555546545646546546464;
   document.write(`완전 큰 숫자${j}<br>`);
   
   j= BigInt(1213224564654564654878798744564564564545646546464654646465455555555555555555555554654564654654646412132245646545646548787987445645645645456465464646546464654555555555555555555555546545646546546464)
   document.write(`완전 큰 숫자${j}<br>`);
```
> 결과 <br>
> ![결과이미지](img/infinite2.png)
** 추가 내용: Bigint안의 숫자는 '문자'형으로 들어가야함 : 전체가 안보임

* Bigint는 아래와 같이 숫자 끝에 n을 붙여도 됨.
```javascript
j=1213224564654564654878798744564564564545646546464654646465455555555555555555555554654564654654646412132245646545646548787987445645645645456465464646546464654555555555555555555555546545646546546464n
   document.write(`완전 큰 숫자${j}<br>`)
```
> 결과 <br>
> ![결과이미지](img/infinite3.png)


## 문자
> 단일문자나 단일문자가 어려개모인 문자열을 다룰때 사용
> 문자열을 정의할때는 ' '," ",\` \` 등을 이용함

```javascript
   let say1= 'hello!';
   let say2= "hello!";
   let say3= `hello!`;
   
   console.log(say1);
   console.log(say2);
   console.log(say3);
    
```
위의 문자열들을 한번에 합칠때는 아래와 같이 사용한다.
```javascript
   let say1= 'hello!';
   let say2= "hello!";
   let say3= `hello!`;
   
   console.log(say1+say2+say3);
   console.log(say1+say2+say3);
    
```
> 결과 <br>
> ![결과이미지](img/result1.png)<br>

이 중에서 백틱(``)의 경우는 연산자 없이 한번에 작성이 가능하다.
백틱의 경우엔, 선언된 변수를 ${안에 담으면 된다.}
```javascript
   let say1= 'hello';
   let name= "고길동";
   let cha3= `둘리`;
   
   console.log(`${say1}!${name}님! 저는 ${cha3}입니다.`);
```
> 결과<br>
> ![결과이미지](img/result2.png)

문자는 다음과 같이 배열처럼 지정 위치를 선택할 수 있다
```javascript
   let jumin= '230119-212312';

   (jumin[7] === '2') ? jumin='여성':jumin='남성';
   document.write(`해당주민번호 성별은: ${jumin}`);
   
```
> 결과 <br>
>![결과이미지](img/result3.png) <br>
>![결과이미지](img/result4.png)

## Boolean
 논리형의 일종으로 true,false 등의 논리값만 존재하며, 주로 긍정, 부정을 나타내는 값에 사용한다.

```javascript
   let isMarried =  false;
   (isMarried) ? 'u r married' : 'u r single';
```
>결과 <br>
>![결과이미지](img/result6.png)

## 객체형(Object)
변수 하나에 여러 종류의 데이터를 담을 수 있다. 
> 예시 ) 이름, 국어, 영어, 수학에 대하여 이름, 총점, 평균 계산 후 출력
```javascript
   let info = {
      name: '둘리',
      math: 90,
      kor: 20,
      eng: 50,
      totlPnt: function(){document.write(`총점: ${this.math+this.kor+this.eng} <br>`)},
      avgs:function(){ return (this.math+this.kor+this.eng)/3 ;}
    }

   document.write(`이름: ${info.name} <br>`);
   info.totlPnt();
   document.write(`평균: ${~~info.avgs()} <br>`);
```
>결과 <br>
>![결과이미지](img/result7.png)

# 자바스크립트 연산자
