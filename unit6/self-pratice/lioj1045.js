// LIOJ 1045：String slice
function slice(str, beginIndex, endIndex) {
    var result=''
    for(let i=beginIndex; i<endIndex; i++){
        result += str[i]
    }
    return result
}

console.log(slice('12345',2,4))