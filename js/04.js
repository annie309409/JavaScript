let checkNumber = (n)=>{
    let result ='';
    switch (~~(parseInt(n)/10000)){
        case 0 : result='10000미만';break;
        case 1 : result='10000~20000';break;
        case 2 : result='20000~30000';break;
        default : result='범위 밖 값';break;
    }
    return result;
};

let CardCheck = (n)=>{
    let result = '';
    let cardData='356417 356901 356912 404825 438676 457973 515594 524353 540926'.split(' ');
    let cardName = '농협카드 신한카드 KB국민카드 비씨카드 신한카드 국민은행 신한카드 외환카드 국민은행'.split(' ');
    switch (n[0]){
        case '3' : result = 'JBC카드'; break;
        case '4' : result = '비자카드'; break;
        case '5' : result = '마스터카드'; break;
        default : result ='정보 없음';break;
    }
    (result != '정보 없음')? (cardData.includes(n)) ? result += cardName[cardData.indexOf(n)]:result = '정보 없음' :  result=' 정보없음';
    return result;
}

let CalculateFee = (e)=>{
    let result ='';
    switch ((parseInt(e)/100)+9){
        case 0 : result='10000원';break;
        case 1 : result='55000원';break;
        case 2 : result='55000원';break;
        case 3 : result='55000원';break;
        default : result='75000원';break;
    }
    return result;
}

let checkDayTime = (daytime) => {
    const eng = 'morning hours  midday  noon  afternoon hours  evening hours  night hours  midnight  early morning hours  small hours  dawn  daybreak'.split('  ');
    const kor = '아침시간 (7-12)  점심시간 (12-1)  점심시간 (12-1)  오후 (1-6)  저녁시간 (6-9)  밤시간 (9-12)  자정시간 (12)  새벽시간 (12-5)  새벽 (1-3)  해뜰력(5-7)  해뜰력(5-7)'.split('  ');
    return (eng.indexOf(daytime)>=0) ? kor[eng.indexOf(daytime)] : '찾는시간 없음';
}

let ComputeInvestment = ()=>{
    let left = 25000;
    let cnt = [];
    for(let  i = left; i < left*2 ; i += i*0.06){
        cnt.push(i);
    }
    return `${cnt.length}`;
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

let lottery =(str)=>{
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

