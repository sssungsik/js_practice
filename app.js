let inputElement = document.getElementById('nickname-input');
let charElemet = document.getElementById('remain-count');
let maxChar = inputElement.maxLength;


function updateCount(event){
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remains = maxChar - enteredTextLength;
   charElemet.textContent = remains;
}


inputElement.addEventListener('input', updateCount );
