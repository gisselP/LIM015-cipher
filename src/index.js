import cipher from './cipher.js';

console.log(cipher);
 
let firstText = document.getElementById('firstText');
let secondText = document.getElementById('secondText');
let numberInput = document.getElementById('number');
let cipherText=" ";
let decipherText=" ";
const buttonCipher= document.getElementById('buttonCipher');
const buttonDecipher= document.getElementById('buttonDecipher');
const buttonRefresh= document.getElementById('refresh');


buttonCipher.addEventListener('click',()=>{
   secondText.style.display="block";
   /* alert(allLetter()); */
   let text = firstText.value.toUpperCase();
   let number= parseInt(numberInput.value);
   cipherText= cipher.encode(number,text);
   secondText.innerText=cipherText;  
   

});

buttonDecipher.addEventListener('click',()=> {
   secondText.style.display="block";
   /* alert(allLetter()); */
   let text = firstText.value.toUpperCase();
   let number= parseInt(numberInput.value);
   decipherText= cipher.decode(number,text);
   secondText.innerText=decipherText;  
   
});

buttonRefresh.addEventListener('click',()=>{
   secondText.style.display="none";
   firstText.value="";
   secondText.value="";
   numberInput.value="";
   
})

   
   

/* function allLetter(){
   let text = firstText.value;
   var letters = /^[A-Za-z]+$/;
   if(text.match(letters)){
      return true;
   }else{
     alert("solo letras");
     return false;
   }
}
 */