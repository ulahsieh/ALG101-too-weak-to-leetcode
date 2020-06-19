function toUpperCase(str){
    var result=''
    for(var i=0; i<str.length; i++){
        if(97<=str[i].charCodeAt(0) && str[i].charCodeAt(0)<=122){
            result += String.fromCharCode(str[i].charCodeAt(0)-32)
        }else{
            result += str[i]
        }
    }
    return result
}

console.log(toUpperCase('Hello'))

/* 方法二
直接用字典序使用字串比大小
ex. 'a' <= c, c <= 'z' 

方法三 使用內建函式 'abc'.toUpperCase()
*/

//p.s. 'abc'.charCodeAt(0) 中的引數 0 是指前面的 '字串' 索引值，所以返回值是 a 的 ascii code 97