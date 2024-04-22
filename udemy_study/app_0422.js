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

