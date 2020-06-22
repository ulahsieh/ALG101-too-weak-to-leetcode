function canBeReverse(str){
    return str==reverse(str)
}
function reverse(str){
    var rev = ''
    for(let i = str.length -1; i >= 0; i--){
        rev += str[i]
    }
    return rev
}

console.log(canBeReverse('abbbba'))