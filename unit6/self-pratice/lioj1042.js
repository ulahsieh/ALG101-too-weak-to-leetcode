// LIOJ 1042：String toLowerCase
function toLowerCase(str) {
    var result=''
    for(let i =0; i<str.length; i++){
        if(65 <= str[i].charCodeAt(0) && str[i].charCodeAt(0) <=90){
            result+=String.fromCharCode(str[i].charCodeAt(0)+32)   
        }else{
            result += str[i]
        }
    }
    return result
}

console.log(toLowerCase('ABCder!!dWE'))