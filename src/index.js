import cipher from './cipher.js';

console.log(cipher);


 const buttonCipher= document.getElementById('buttonCipher');
 buttonCipher.addEventListener('click',f1 );

function f1(){
    let firstText = document.getElementById('firstText');
    let secondText = document.getElementById('secondText');
    secondText.innerText=firstText.value;  

}