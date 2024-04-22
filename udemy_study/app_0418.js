let myBtn = document.querySelector('button'); 
let access = document.querySelector('p'); 

function search() {
    access.textContent = '제출되었습니다.';
}
myBtn.addEventListener('click', search);


let myInput = document.querySelector('input');
function userInput(event){
    // let text = myInput.value;
    let text = event.target.value;
    console.log(text);
}
myInput.addEventListener('input', userInput);