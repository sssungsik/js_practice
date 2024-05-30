// if 문
/*
if(조건식) {
    '자바스크립트 코드';
}
*/

/*
 조건식에 논리형이 아닌 다른 형이 오는 경우
0, null, "", undefined   -> false
*/

var id = 'id001';
var pw = 'pw001';

var idCheck = prompt('아이디', '입력');

if(id == idCheck) {
    var pwCheck = prompt('비밀번호','입력');
    if(pw == pwCheck) {
        alert('접속 완료');
    } else {
        alert('비번 불일치');
        location.reload(); // 브라우저 새로고침
    }
} else {
    alert('아이디 불일치');
    location.reload();
}