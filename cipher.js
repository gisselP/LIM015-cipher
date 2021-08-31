const cipher = {
  encode (number, text) {
    if (number === null || number === 0) {
      throw new TypeError();
    }
    let result = '';
    let offset;
    for (let i = 0; i < text.length; i++) {
      const asciiNumber = text.charCodeAt(i);
      /* Esta condición solo es para mayúsculas */
      if (asciiNumber >= 65 && asciiNumber <= 90) {
      /* Aplicamos la fórmula para saber cuál es la nueva posición */
        offset = (((asciiNumber - 65) + number) % 26) + 65;
      } else if (asciiNumber === 32) {
        offset = 32;
      } else if (asciiNumber >= 97 && asciiNumber <= 122) {
        offset = (((asciiNumber - 97) + number) % 26) + 97;
      }
      /* con String.fromCharCode cambiará los números por letras */
      result += String.fromCharCode(offset);
    }
    return result;
  },
  decode (number, text) { /* Para descifrar el texto */
    if (number === null || number === 0) {
      throw new TypeError();
    }
    let result = ''; let
      offset;
    for (let i = 0; i < text.length; i++) {
      const asciiNumber = text.charCodeAt(i);
      if (asciiNumber >= 65 && asciiNumber <= 90) {
      /* la fórmula varía porque ahora se desplaza de forma contraria */
        offset = ((asciiNumber - 90 - number) % 26) + 90;
      } else if (asciiNumber === 32) {
        offset = 32;
      } else if (asciiNumber >= 97 && asciiNumber <= 122) {
        offset = (((asciiNumber - 122) - number) % 26) + 122;
      }
      result += String.fromCharCode(offset);
    }
    return result;
  }

};

export default cipher;
