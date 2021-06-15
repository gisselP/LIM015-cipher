const cipher = {
    encode:function (number,text){  /* Para cifrar el texto */

        let result="", offset;

        for( let i = 0; i<text.length ; i++) {
            
            let asciiNumber= text.charCodeAt(i); /* Con charCodeAt obtienes el código ascii(números) de cada caracter de text */
            
            if(asciiNumber >= 65 && asciiNumber <= 90){  /* Esta condición solo es para mayúsculas */
                offset = ( ( (asciiNumber - 65) + number) %26) + 65; /* Aplicamos la fórmula para saber cuál es la nueva posición*/
            
            }else if(asciiNumber === 32){  /* Esta condición solo es para que respete el espacio */
                offset = 32;

            }else if(asciiNumber >= 97 && asciiNumber <= 122){ /* Esta condición solo es para minúsculas */
                offset = ( ( (asciiNumber - 97) + number) %26) + 97;
            }
            result+=String.fromCharCode(offset); /* con String.fromCharCode cambiará los números por letras */ 
        } 
        return result;
    },
    
    decode:function (number,text){/* Para descifrar el texto */

        let result="", offset;

        for( let i = 0; i<text.length ; i++) {
            let asciiNumber= text.charCodeAt(i);

            if(asciiNumber >= 65 && asciiNumber <= 90){
                offset =  ( asciiNumber - 90 - number) %26 + 90;  /* la fórmula varía porque ahora se desplaza de forma contraria */

            }else if(asciiNumber===32){
                offset=32;

            }else if(asciiNumber >= 97 && asciiNumber<= 122){
                offset = ( ( (asciiNumber - 122) - number) %26) + 122;
            }
            result+=String.fromCharCode(offset);
        } 
        return result;
    }

};



export default cipher;
