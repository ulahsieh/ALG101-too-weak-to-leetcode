function ooxx(arr){
    str = arr[0] + arr[1] + arr[2]
    if( str[0] === str[1] && str[1] === str[2]) return str[0]
    if( str[3] === str[4] && str[4] === str[5]) return str[3]
    if( str[6] === str[7] && str[7] === str[8]) return str[6]
    if( str[0] === str[4] && str[4] === str[8]) return str[0]
    if( str[2] === str[4] && str[4] === str[6]) return str[2]
    if( str[2] === str[5] && str[5] === str[8]) return str[0]
    if( str[1] === str[4] && str[4] === str[7]) return str[0]
    if( str[0] === str[3] && str[3] === str[6]) return str[0]
    return 'DRAW'
}

console.log(ooxx(['ooo','xox','xox']))
console.log(ooxx(['xxo','oxx','xoo']))