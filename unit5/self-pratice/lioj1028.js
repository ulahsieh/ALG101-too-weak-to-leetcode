function theCode(str){
    var arr = str.split(' ')
    var total = 0
    for(var i=0; i<arr.length; i++){
        total += addDigit(arr[i])
    }
    while(total>9){
        total = addDigit(total)
    }

    return total

}


function addDigit(n){
    n += ''
    var arr = n.split('')
    var result=0
    for(let i = 0; i < arr.length; i++){
        result += Number(arr[i])
    }
    return result
}

console.log(theCode('1946 06 14'))