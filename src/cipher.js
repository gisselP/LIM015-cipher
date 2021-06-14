const cipher = {
    encode:function (number,text){  /* Para cifrar el texto */

        let result="", code;

        for( let i = 0; i<text.length ; i++) {
            
            let asciiNum= text.charCodeAt(i); /* Con charCodeAt obtienes el código ascii(números) de cada caracter de text */
            
            if(asciiNum >= 65 && asciiNum <= 90){  /* Esta condición solo es para mayúsculas */
                code = ( ( (asciiNum - 65) + number) %26) + 65; /* Aplicamos la fórmula para saber cuál es la nueva posición*/
            
            }else if(asciiNum===32){  /* Esta condición solo es para que respete el espacio */
                code = 32;

            }else if(asciiNum >= 97 && asciiNum <= 122){ /* Esta condición solo es para minúsculas */
                code = ( ( (asciiNum - 97) + number) %26) + 97;
            }
            result+=String.fromCharCode(code); /* con String.fromCharCode cambiará los números por letras */ 
        } 
        return result;
    },
    
    decode:function (number,text){/* Para descifrar el texto */

        let result="", code;

        for( let i = 0; i<text.length ; i++) {
            let asciiNum= text.charCodeAt(i);

            if(asciiNum >= 65 && asciiNum <= 90){
                code =  ( asciiNum - 90 - number) %26 + 90;  /* la fórmula varía porque ahora se desplaza de forma contraria */

            }else if(asciiNum===32){
                code=32;

            }else if(asciiNum >= 97 && asciiNum <= 122){
                code = ( ( (asciiNum - 122) - number) %26) + 122;
            }
            result+=String.fromCharCode(code);
        } 
        return result;
    }

};



export default cipher;
