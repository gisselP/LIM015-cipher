import cipher from './cipher.js';

const firstText = document.getElementById('firstText');
const secondText = document.getElementById('secondText');
const numberInput = document.getElementById('number');
let cipherText = ' ';
let decipherText = ' ';
const buttonCipher = document.getElementById('buttonCipher');
const buttonDecipher = document.getElementById('buttonDecipher');
const buttonRefresh = document.getElementById('refresh');

function allLetter () {
  const text = firstText.value;
  if (text === '') {
    secondText.style.display = 'none';
    alert('¡Hey! No te olvides de poner el texto');
    return false;
  }
  if (numberInput.value === '') {
    secondText.style.display = 'none';
    alert('Psst... se te olvidó el número');
    return false;
  }
  const letters = /^[a-zA-Z áéíóúÁÉÍÓÚñÑ\s]*$/;
  if (text.match(letters)) {
    return true;
  }
  alert('Solo letras, por ahora');
  return false;
}

buttonCipher.addEventListener('click', () => {
  secondText.style.display = 'block';
  allLetter();
  const text = firstText.value;
  const number = parseInt(numberInput.value);
  cipherText = cipher.encode(number, text);
  secondText.innerText = cipherText;
});
buttonDecipher.addEventListener('click', () => {
  secondText.style.display = 'block';
  allLetter();
  const text = firstText.value;
  const number = parseInt(numberInput.value);
  decipherText = cipher.decode(number, text);
  secondText.innerText = decipherText;
});

buttonRefresh.addEventListener('click', () => {
  secondText.style.display = 'none';
  firstText.value = '';
  secondText.value = '';
  numberInput.value = '';
});
