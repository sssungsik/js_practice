// 산술 연산자

/*
+ : A+B 
- : A-B
* : AxB
/ : A/B 
% : A%B
*/

// 대입 연산자

/*
A = B : A = B 
A += B : A = A+B
A *= B : A = A*B
A /= B : A = A/B 
A %= B : A = A%B
*/
var str = "<table border='1'>";
str += "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</tr>";
str += "</table>";
document.write(str);


// 증감 연산자

var num1 = 10;
var num2 = 20;
var result;

num1 --;
document.write(num1, "<br>");  // 9 

num1 ++;
document.write(num1, "<br>");  // 10

result = num2 ++; // result : 20,  num2 : 21
document.write(result, "<br>"); 

result = ++num2; // result : 22,  num2 : 22
document.write(result, "<br>"); 

// 비교 연산자

/*
나머지 생략
A == B : A와 B는 같다
A != B : A와 B는 다르다

A === B : A와 B는 같다  (자료형까지 판단)
A !== B : A와 B는 다르다
*/

const k = 10
const m = '10';
k == 10; // true
m == 10; // true
k === 10; // true
m === 10; // false

// 논리 연산자

/*
|| : or 연산자, 값이 하나라도 true 시 true 반환
&& : and 연산자, 값이 하나라도 false 시 false 반환
!  : not 연산자, 값 true 시 false 반환
*/

const a1 = 10;
const a2 = 20;
const a3 = 30;
const a4 = 40;
let result2;

result2 = a1 > a2 || a2 >= a3 || a3 > a4;  // false || false || false
console.log(result2); // false

result2 = a1 > a2 || a2 >= a3 || a3 <= a4; // false || false || true
console.log(result2); // true

result2 = a1 <= a2 && a2 >= a3 && a3 <= a4; // true && false && true
console.log(result2); // false

result2 = a1 <= a2 && a2 <= a3 && a3 <= a4 // true && true && true
console.log(result2); //true 

result2 = !(a1 > a2); // !false 
console.log(result2); // true

// 삼항 조건 연산자 

result2 = a1 < a2 ? "정답" : "오답";
console.log(result2);


// 문제 1 
/*
진영이의 하루 지출 내역 : 교통비 3000 / 식비 6000 / 음료 3000
삼항조건연산자 이용, 하루 적정 지출 비용 1만 초과 시 
'000원 초과' 출력, 아닐 경우 ' 돈 관리 잘했어요!' 출력
*/

const price1 = 3000;
const price2 = 6000;
const price3 = 3000;
const overall = 10000;
const allPrice = (price1 + price2 + price3);
let result3;

result3 = allPrice > overall ? `${allPrice - overall} 원 초과!!!`: "돈 관리 잘했어요!";
console.log(result3);
