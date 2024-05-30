
// 내장 객체 생성

/*
참조 변수(인스턴스 이름) = new 생성 함수()
*/

var car = new Object();
car.color = 'black';
car.name = 'g90';
car.print = function(){
    console.log('색상 : ', this.color);
    console.log('이름 : ', this.name);
}

car.print();


// 날짜 정보 객체

/*
참조 변수 = new Date();
참조 변수 = new Date('연/월/일');
참조 변수 = new Date(연,월,일);

*/ 

const today = new Date();
const nowMonth = today.getMonth() + 1;
const nowDate = today.getDate();
const nowDay = today.getDay();

today.print = function() {
    console.log('월 : ', nowMonth);
    console.log('일 : ', nowDate);
    console.log('요일 : ', nowDay);
}
today.print();


// 수학 객체



