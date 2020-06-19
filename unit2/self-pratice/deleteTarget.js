function deleteTarget(str, target){
    var result=''
    for(var i=0; i<str.length; i++){
        if(str[i] !== target){
            result += str[i]
        }
    }
    console.log(result)
}

deleteTarget('hellllo','l')