// while 문

/*
var 변수;
while(조건식) {
    자바스크립트 코드;
    증감식;
}
*/


let i = 1;
while (i<=10) {
    console.log(i,'while');
    i++;
}
console.log('끝');

// do while 문

/*
var 변수;
do{
    자바스크립트 코드;
    증감식;
} while(조건식)
*/

let j = 1;
do {
    console.log(j, 'doWhile');
    j++;
} while (j <= 10);

// for 문

/*
for(초기값; 조건식; 증감식) {
    자바스크립트 코드;
}
*/

for (let i = 1; i <= 10; i++) {
    console.log(i, 'for');
    
}

// break 문
// 반복문 강제 종료

// continue 문
// 반복문 무시

// 문제 01 : while 문으로 구구단 5단 출력
let ax = 1;
while (ax < 10) {
    console.log(`5 x ${ax} = ${5 * ax}`);
    ax++
}
