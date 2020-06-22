// LIOJ 1041：String trim
function trim(str) {
    var result=''
    var front
    var back
    for(let i=0; i<str.length; i++){
        if(str[i]!==' '){
            front = i
            break
        }
    }
    console.log(front)
    for(let i=str.length-1; i>=0; i--){
        if(str[i]!==' '){
            back = i
            break
        }
    }
    console.log(back)
    for(let i=front; i<=back; i++){
        result += str[i]
    }

    return result
}

console.log(trim('    h el lo    '))

