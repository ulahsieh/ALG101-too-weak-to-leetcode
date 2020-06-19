function swapUnLCase(str){
    var result=''
    for(let i=0; i<str.length; i++){
        if(65<=str[i].charCodeAt(0) && str[i].charCodeAt(0)<=90){
            result += String.fromCharCode(str[i].charCodeAt(0)+32)
        }else if(97<=str[i].charCodeAt(0) && str[i].charCodeAt(0)<=122){
            result += String.fromCharCode(str[i].charCodeAt(0)-32)
        }else{
            result+=str[i]
        }
    }
    console.log(result)
}

swapUnLCase('HeLlO WoRLdzzza')