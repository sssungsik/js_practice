
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

let num = 2.1234;

console.log(Math.abs(num)); // 절댓값 반환
console.log(Math.max(num, 2, 99)); // 최대값 반환
console.log(Math.min(num, 2, 99)); // 최소값 반환
console.log(Math.pow(num, 2)); // 거듭제곱값 반환
console.log(Math.random()); // 랜덤 값 반환
console.log(Math.round(num)); // 소수 첫째 자리 반올림
console.log(Math.ceil(num)); // 소수 첫째 자리 올림
console.log(Math.floor(num)); // 소수 첫째 자리 내림
console.log(Math.sqrt(81)); // 숫자 제곱근 값 반환
console.log(Math.PI); // 원주율 상수 반환

// 100부터 200까지 정수로 난수를 반환
console.log(Math.floor(Math.random()*100)+100);


// 배열 객체

/* 생성 방법 1 */
const arr1 = new Array();
arr1[0] = '가';
arr1[1] = '나';
arr1[2] = '다';
/* 생성 방법 2 */
const arr2 = new Array('라','마','바','사');
/* 생성 방법 3 */
const arr3 = ['아','자','차'];


/* 값 가져오기 1 */
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);   
}
/* 값 가져오기 2 */
for (i in arr2) {
    console.log(arr2[i]);
}

console.log(arr1.join('---')); // .join = 지정 된 값으로 연결하여 반환
console.log(arr1.concat(arr2)); // .concat =  2개 배열 하나로 만들어 반환
console.log(arr1.slice(1,3)); // .slice =  값 자르기
console.log(arr1.sort()); // .sort =  배열 값 오름차순 정렬
console.log(arr1.reverse()); // .reverse =  배열 값 뒤집기
console.log(arr1.splice(2,1,'갸','냐')); // .splice =  2번 인덱스부터 1개의 데이터 삭제 후 '갸''냐' 삽입


// 문자열 객체

const text1 = '순창최성식';

console.log(text1.charAt(3)); // .charAt =  n번 인덱스 값 반환
console.log(text1.indexOf('성')); // .indexOf = 문자열의 인덱스 값 반환
console.log(text1.match('성')); // .match = 일치되는 문자 반환
console.log(text1.search('성식')); // .search = 찾는 문자 인덱스 값 반환
console.log(text1.substr(2,3)); // .substr = 인덱스 2 부터  3글자 반환
console.log(text1.substring(2,3)); // .substring = 인덱스 2 부터 인덱스 3 의 값 반환
console.log(text1.replace('순창','임동')); // .replace = '순창'을 찾아 '임동'으로 변환
console.log('AAAA'.toLowerCase()); // .toLowerCase = 소문자로 변환
console.log('aaaa'.toUpperCase()); // .toUpperCase = 대문자로 변환
console.log(text1.length); // .length = 문자열 길이 반환, 공백 포함
console.log(text1.split("창")); // .split = '창' 기준으로 문자 분리, 배열 반환
console.log(text1.charCodeAt(0)); // .charCodeAt = 해당 인덱스 아스키 코드값 반환
console.log(String.fromCharCode(49914)); // .fromCharCode = 아스키코드 값 해당하는 문자 반환
