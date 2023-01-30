let checkNumber = (n=prompt('값을 입력하세요!'))=>{
    let result ='';
    switch (~~(parseInt(n)/10000)){
        case 0 : result='10000미만';break;
        case 1 : result='10000~20000';break;
        case 2 : result='20000~30000';break;
        default : result='범위 밖 값';break;
    }
    return result;
};

let CardCheck = (n=prompt('값을 입력하세요!'))=>{
    // 검색범위를 낮출수있도록 관련된 카드만 나올수있게함
    // 검사를 안해도 되는 영역까지 검사를 해야되므로 효율적인 코드 작성이 필요함
    // let cardData='356417 356901 356912 404825 438676 457973 515594 524353 540926'.split(' ');
    // let cardName = '농협 신한 KB국민 비씨 신한 국민 신한 외환 국민'.split(' ');
    // case 3 : (result = 'JBC,',result += cardName[0][cardData[0].indexOf(n.slice(2,n.length))]+'카드'); break;
    // case 4 : (result = 'VISA,',result += cardName[1][cardData[1].indexOf(n.slice(2,n.length))]+'카드'); break;
    // case 5 : (result = 'MASTER,',result += cardName[2][cardData[2].indexOf(n.slice(2,n.length))]+'카드'); break;
    let result = '';
    let idx = 0;
    let cardComp = ['JBC','VISA','MASTER'];
    let cardData= [['6417','6901','6912'], ['4825','8676','7973'],['5594','4353','0926']];
    let cardName = [['농협' ,'신한', 'KB국민'],['비씨', '신한', '국민'],['신한','외환','국민']];
    switch (~~(parseInt(n.slice(0,2))/10)){
        case 3 : idx = 0; break;
        case 4 : idx = 1; break;
        case 5 : idx = 2; break;
        default : result ='정보 없음';break;
    }
    (cardName[idx][cardData[idx].indexOf(n.slice(2,n.length))]==undefined)? result= '정보없음':
    result = `${cardComp[idx]}, ${cardName[idx][cardData[idx].indexOf(n.slice(2,n.length))]}카드`;
    return result;
}

let CalculateFee = (e=prompt('거리를 입력하세요!'))=>{
    let result ='';
    switch (Math.ceil(parseInt(e)/50)){
        case 1 : result='10000원';break;
        case 2 : result='18000원';break;
        case 3 : result='55000원';break;
        case 4 : result='55000원';break;
        case 5 : result='55000원';break;
        case 6 : result='55000원';break;
        default : result='75000원';break;
    }
    return result;
}

let checkDayTime = (daytime=prompt('시간때를 영어로 입력하세요!')) => {
    const eng = 'morning hours  midday  noon  afternoon hours  evening hours  night hours  midnight  early morning hours  small hours  dawn  daybreak'.split('  ');
    const kor = '아침시간 (7-12)  점심시간 (12-1)  점심시간 (12-1)  오후 (1-6)  저녁시간 (6-9)  밤시간 (9-12)  자정시간 (12)  새벽시간 (12-5)  새벽 (1-3)  해뜰력(5-7)  해뜰력(5-7)'.split('  ');
    return (eng.indexOf(daytime)>=0) ? kor[eng.indexOf(daytime)] : '찾는시간 없음';
}

let ComputeInvestment = (left = prompt('잔고를 입력하세요!'),bae =prompt('얼마까지 불리고 싶나요?'))=>{
    let cnt = [];
    let result ='';
    for(let  i = left; i <= bae ; ~~(i *= 1.06)){
        cnt.push(i);
        console.log(i);
    }
    result=`${cnt.length}년이 지나야 합니다.`;
    return result;
}

let divs = (i,st)=>{ return `<div style="width:40px; text-align: center; float:left;  ${st}"> ${i}</div>`}


let BigGugudan = ()=>{
    let result = '';
    result += '<h2 style="width: 400px; text-align: center;">multiplication table</h2>';
    for(let i=0 ; i<=9; i++){
        (i===0)? false :result += divs(`${i}|`,'');
        for(let j = 0; j<=9 ; j++){
            (i===0) ? (j===0)? result += divs('&nbsp;',''):result += divs(j,'text-decoration: underline')
                : (j===0)? false:result += divs(i*j,'');
        }
        result+='<br>'
    }
    return result;
}
let BigGugudanV2 = ()=>{
    let result ='<h2>multiplication table</h2><table>';

    for(let i= 0; i<=9 ;i++){
        result += `<tr><td>${i} |</td>`;
        for(let j=0; j<=9 ;j++){
            (j!=0)?(i===0)? result += `<td>${j}</td>`:result += `<td>${i*j}</td>`:false;
        }
        result+='</tr>'

    }
    result +='</table>';
    return result;
}




let lottery =(str=prompt('랜덤숫자3개를 붙여서 입력!'))=>{
    let lotto = `${parseInt(Math.random()*1000)}`.split('');
    let mykey = str.split('');
    let match = 0;
    let result = '';
    mykey.forEach(e=>{
        if(lotto.indexOf(e) >= 0) match++;
    });
    switch (match){
        case 1 : result = `3등입니다.`;break;
        case 2 : result = '2등입니다.';break;
        case 3 : result = '1등입니다.';break;
        default : result ='꽝입니다.';
    }
    return result;
}

let computeTax = (gm=parseInt(prompt('혼인여부','기혼(0),미혼(1)')),sal=prompt('연봉입력'))=>{
    let result=0;
    (gm===1)? (sal>=3000)?result=sal*0.25:result=sal*0.1
    :(sal>=6000)?result=sal*0.35:result=sal*0.15;
    return result;
}

let CatchNumber=(n=prompt('맞출숫자입력!'))=>{
// 숫자를 안에서 만드면 코드가 맑지않음
// 특정함수가 만들어질때 본연의 기능에 집중 : 응집도 (소프트웨어 공학관점)
    let num = parseInt(Math.random()*100);
    let cntWrong  = 0;
    while(num != n){
        (num>n)? n =prompt('더 큰 숫자입력!'):n =prompt('더 작은 숫자입력!');
        cntWrong++;     
    }
    return cntWrong;
}

let CalendarV1 = (year = prompt('년도와 월을 입력하세요!','202301'))=>{
    let calen= [13,14,3,4,5,6,7,8,9,10,11,12];
    let m = calen[parseInt(year.slice(4,6)-1)];
    let K = parseInt(year.slice(2,4));
    let D = parseInt(year.slice(0,2));
    let C = (K + Math.floor(K / 4)) / 4;
    const d = (K + Math.floor((13 * (m + 1)) / 5) + D + Math.floor(D / 4) + Math.floor(C / 4) - 2 * C) % 7;
    // alert(d);

    switch (d){
        case 0 : alert('토요일'); break;
        case 1 : alert('일요일'); break;
        case 2 : alert('월요일'); break;
        case 3 : alert('화요일'); break;
        case 4 : alert('수요일'); break;
        case 5 : alert('목요일'); break;
        case 6 : alert('금요일'); break;
    }

    // let strt =~~((((year-1)*365+ (year-1)/4 - (year-1)/100 +(year-1)/400))+1)%7;
    // // let strt = (1 + floor((13 * (m + 1)) / 5) + K + floor(K / 4) + floor(J / 4) + 5 * J) mod 7
    //
    // let result = '';
    // let dt = 0;
    // let days ='Sun Mon Tue Wed Thu Fri Sat'.split(' ');
    // result += `<h2 style='border-bottom : 2px solid black; width:280px; text-align:center'>January ${year} </h2>`;
    // for(let i =0; i<days.length; i++){
    //     for(j = 0 ; j< days.length; j++){
    //         (i===0)? result+= divs(`${days[j]}`,'font-weight:700')
    //         :(i===1 & j<strt)? result += divs(`&nbsp;`,'')
    //         :(dt>30)? false :(dt++,result += divs(`${dt}`,'') )
    //     }
    //     result += '<br>';
    // }
    // for(let i = 0 ; i<strt; i++){
    //     result += divs(`&nbsp;`,'');
    // }
    // for(let j=1; j<31+(strt-1); j++){
    //     result += divs(j,'');
    //     if((2+j)%7===0) result+='<br>';
    // }

    return result;
}

