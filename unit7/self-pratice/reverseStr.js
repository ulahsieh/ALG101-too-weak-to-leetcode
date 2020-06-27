function reverse(str){
    var result = ''
    //console.log(result)
    for(let i =str.length-1; i>=0; i--){
        //console.log(str[i])
        result += str[i]
    }   
    return result
}

console.log(reverse('hello'))