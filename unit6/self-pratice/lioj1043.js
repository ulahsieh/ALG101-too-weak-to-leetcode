// LIOJ 1043：String endsWith
function endsWith(str, searchString) {
    var compare = ''
    for(let i=str.length-searchString.length; i<str.length; i++){
        compare += str[i]
    }
    if(compare === searchString) return true
    return false
}

console.log(endsWith('hello','lo'))