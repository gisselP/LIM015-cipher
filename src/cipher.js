const cipher = {
    encode:function (number,text){
        let result="", code;

        for( let i = 0; i<text.length ; i++) {
            let asciiNum= text.charCodeAt(i);
            if(asciiNum >= 65 && asciiNum <= 90){
                code = ( ( (asciiNum - 65) + number) %26) + 65;
            }else if(asciiNum===32){
                code=32;
            }
            result+=String.fromCharCode(code);
        } 
        return result;
    },
    
    decode:function (number,text){
        let result="", code;

        for( let i = 0; i<text.length ; i++) {
            let asciiNum= text.charCodeAt(i);
            if(asciiNum >= 65 && asciiNum <= 90){
                code = ( ( (asciiNum - 90) - number) %26) + 90;
            }else if(asciiNum===32){
                code=32;
            }
            result+=String.fromCharCode(code);
        } 
        return result;
    }

};



export default cipher;
