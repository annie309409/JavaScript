// 값 저장공간
class data{
    #name='';
    #kor = 0;
    #eng = 0;
    #math = 0;


    #total = 0;
    #avg = 0;
    #score = '';

    constructor(name,kor,eng,math) {
        this.#name = name;
        this.#kor = kor;
        this.#eng = eng;
        this.#math = math;
    }

    set name (name){this.#name = name};
    get name (){ return this.#name};
    set kor (kor){this.#kor = kor};
    get kor (){return this.#kor};
    set math (math){this.#math = math};
    get math (){ return this.#math};
    set eng (eng){this.#eng = eng};
    get eng (){ return this.#eng};
    set total (total){this.#total = total};
    get total (){ return this.#total};
    set avg(avg){this.#avg = avg};
    get avg(){ return this.#avg};
    set score (score){this.#score = score};
    get score (){ return this.#score};

    toString(){
        return `이름 : ${this.#name} <br> 수학점수 : ${this.#math} <br>영어점수 : ${this.#eng} <br>국어점수 : ${this.#kor} <br>총점 : ${this.#total} <br>평균 : ${this.#avg} <br>학점 : ${this.#score} <br>`
    }
}


class sungjukService{

    //객체생성 없이 바로 해당 메서드를 호출해서 쓸 수 있음
    static computeSungJuk(sj){
        sj.total  =  sj.kor + sj.eng + sj.math;
        sj.avg  = sj.total/3;
        console.log(sj.avg);
        switch (~~(sj.avg/10)){
            case 10: sj.score='수'; break;
            case 9: sj.score='수'; break;
            case 8: sj.score='우'; break;
            case 7: sj.score='미'; break;
            case 6: sj.score='양'; break;
            default : sj.score='가'; break;
        }
    }
}


