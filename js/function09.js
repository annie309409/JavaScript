let star = '';

function showPyramid(dir,n){
    if(dir==='정방향'){
        for(let i = 0 ; i<n; i++){
            for(let j=0 ; j<=i; j++) {
                star += '*';
            }
            star +='<br>';
        }
    }else{
        for(let i = 0 ; i < n; i++){
            for(let j = 0 ; j < n; j++) {
                (j<i) ?star += '&nbsp':star += '*';
            }
            star += '<br>';
        }
    }


    return star;
}

//     시,분,초를 입력받아 오전, 오후 구분출력
// let morAfert='';
//
// function showAmPm(s){
//     (s>=12)? morAfert = '오후':morAfert = '오전';
//     return `${s}시는 ${morAfert}입니다.`;
// }

//     국어, 영어, 수학입력시 학점 출력함수
let jum = '';
let total = 0;

// function computeSungJuk(sub = ['국어','영어','수학']){
//     for(let i of sub){
//         total += parseInt(prompt(`${i}점수는?`));
//     }
//     switch (~~((total/3)/10)){
//         case 10: jum = '수'; break;
//         case 9: jum = '수'; break;
//         case 8: jum = '우'; break;
//         case 7: jum = '미'; break;
//         case 6: jum = '양'; break;
//         default : jum = '가';
//     }
//     return `총 점수 : ${total} <br>평균점수 : ${Math.round((total/3))} <br>학점 : ${jum}`;
// }

const computeSungJuk = (sub = ['국어','영어','수학'])=>{
    for(let i of sub){
        total += parseInt(prompt(`${i}점수는?`));
    }
    switch (~~((total/3)/10)){
        case 10: jum = '수'; break;
        case 9: jum = '수'; break;
        case 8: jum = '우'; break;
        case 7: jum = '미'; break;
        case 6: jum = '양'; break;
        default : jum = '가';
    }
    return `총 점수 : ${total} <br>평균점수 : ${Math.round((total/3))} <br>학점 : ${jum}`;
}


//윤년여부 계산기
let yoon ='';
function computeLeapYear(year){
    ((year % 4 ===0 && year%100 != 0) || year % 400 === 0)? yoon = '윤년입니다' : yoon = '평년입니다.';
    return yoon;
}


// 부가세 계산프로그램 : computeVAT
//  금액을 입력하면 부가세를 계산해서 출력

//선언형
    function computeVAT1(price){
        return `${price}의 부가세는 ${price*0.1}원 입니다.`
    }
//익명형
    let computeVAT2 = function (price){
        return `${price}의 부가세는 ${price*0.1}원 입니다.`
    }
//화살표 v1
    let computeVAT3 = (price)=>{ return `${price}의 부가세는 ${price*0.1}원 입니다.`};
//화살표 v2 가로생략
    let computeVAT4 = price=>{ return `${price}의 부가세는 ${price*0.1}원 입니다.`};
//화살표 v3 가로 리턴생략
    let computeVAT5 = price=>`${price}의 부가세는 ${price*0.1}원 입니다.`;



let showDateTime= ()=>{
    let date =  new Date();
    let dayday =  date.getDay();
    let dayName = '일 월 화 수 목 금 토'.split(' ');
    return console.log( date.toLocaleString()+' '+dayName[dayday]);
};


let identifyNumber = (s)=> (s<0)? '음수' : (s==='0')? '0' : '정수';
