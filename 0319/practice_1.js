
/* 새 요소 추가하여 inner HTML 삽입 */

// 요소 생성
let newElement2 = document.createElement('p');
// 요소 추가
newElement2.innerHTML = '<strong>inner</strong>HTML삽입';
// 자식 요소 값 설정
document.body.appendChild(newElement2);

