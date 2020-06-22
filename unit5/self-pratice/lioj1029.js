function compute(str){
    var arr = str.split(' ');
    var result = 0;
    if(arr[1]==='+') result = Number(arr[0]) + Number(arr[2])
    if(arr[1]==='-') result = Number(arr[0]) - Number(arr[2])
    if(arr[1]==='/') result = Number(arr[0]) / Number(arr[2])
    if(arr[1]==='*') result = Number(arr[0]) * Number(arr[2])
    return result
}

console.log(compute('3 * 4'));