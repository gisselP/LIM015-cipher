const cipher = {
    encode:function (text,number){
        let result="",code;

        for( let i = 0; i<text.length ; i++) {
            let asciiNum= text[i].charCodeAt();
            if(asciiNum >= 65 && asciiNum <= 77){
                code=( ( (asciiNum-65) +number) %26) +65;
            }else if(asciiNum >= 78 && asciiNum <= 90){
                code=( ( (asciiNum-65) -number) %26) +65;
            }else if (asciiNum === 32){
                code=32  ; 
            } 
            result+=String.fromCharCode(code);
        } 
        return result;
      }
    



};



export default cipher;
