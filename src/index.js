import cipher from './cipher.js';

console.log(cipher);
 
let firstText = document.getElementById('firstText');
let secondText = document.getElementById('secondText');
let numberInput = document.getElementById('number');
let cipherText=" ";
const buttonCipher= document.getElementById('buttonCipher');


buttonCipher.addEventListener('click',f1 );
function f1(){
    let text = firstText.value.toUpperCase();
    let number= numberInput.value;
    cipherText=cipher.encode(text,number);
    secondText.innerText=cipherText;  

}

