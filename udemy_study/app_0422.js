// input 문자열 길이 추출 코드 

const inputElement = document.getElementById('nickname-input');
const charElemet = document.getElementById('remain-count');
const maxChar = inputElement.maxLength;
let userNickname = '';

function updateCount(event){
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remains = maxChar - enteredTextLength;
    charElemet.textContent = remains;
   
     userNickname = enteredText;



}
inputElement.addEventListener('input', updateCount );

// input 문자열 길이 CSS 코드
const spanElement = document.getElementById('remain-count');
spanElement.className = 'warning';


// button 클릭 이벤트 코드
const btnOk = document.getElementById('myBtn')
const access = document.querySelector('p'); 

function search() {
    if(userNickname == '') {
        alert('하나 이상의 글자를 입력해 주세요');
    } else {
    confirm(userNickname + '으로 하시겠습니까?');
    access.textContent = '닉네임 설정 완료';
    }
}
myBtn.addEventListener('click', search);



// 1) 두 개의 버튼 요소를 선택하고 두 개의 다른 변수에 저장합니다.

// - "id"를 추가하거나 사용하지 않고 첫 번째 버튼을 선택합니다. 
const btn1 = document.querySelector('button');
// - "id"를 사용하여 두 번째 버튼을 선택합니다. 
const btn2 = document.getElementById('blueBtn');

// 2) 두 버튼에 "click"이벤트 리스너를 추가합니다 (두 가지 다른 기능 포함). 함수는 클릭한 버튼을 "console.dir()"해야 합니다. 
// - 첫 번째 버튼은 저장된 변수를 사용하여 출력합니다.
function btn1Click(){
    console.dir(btn1);
}
btn1.addEventListener('click', btn1Click);
// - 저장된 변수를 사용하지 않고 두 번째 버튼을 출력합니다. 
function btn2Click(){
    console.dir(document.getElementById('blueBtn'));
}
blueBtn.addEventListener('click', btn2Click);

// 3) 이제 페이지에 표시되는 텍스트에 언급 된 단락을 선택하여 저장하십시오. (첫 번째 및 세 번째 단락) 
// - 문서를 드릴로 드릴하고 "탐색"하여 두 단락을 모두 선택합니다. 언급 된 요소 
// - DOM 드릴링에 어려움을 겪고 있다면 대신 "ids"를 사용하되 솔루션을 지켜보십시오! 

// 4) (2)에서 다음과 같이 기능을 변경합니다. 
// - 첫 번째 버튼은 세 번째 단락(즉, 그 앞의 [P])을 제거합니다. 
// - 두 번째 버튼은 첫 번째 단락의 배경색을 파란색으로 변경합니다. 

// 5) "인라인 스타일"을 변경하고 CSS 클래스를 추가하여 (4)를 해결하십시오. 
// 참고: 먼저 해당 클래스를 styles.css 파일에 추가해야 합니다.