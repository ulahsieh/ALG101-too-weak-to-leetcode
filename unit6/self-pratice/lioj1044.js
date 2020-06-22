// LIOJ 1044：String padEnd
function padEnd(str, targetLength, padString) {
    var add = str
    var result=''
    while (add.length <= targetLength){
        add += padString
    }
    console.log()
    for(let i=0; i<targetLength; i++){
        result += add[i]
    }
    console.log(result)
    return result
    
}

padEnd('abcaa',5,'xyz')
