function pyramid(num){
    var temp=''
    var f = 1
    for(let i=1; i<=num; i++){
        for(let j=1; j<=num-i;j++){
            temp+=' '
        }
        for(let k=1; k<=f;k++){
            temp+='*'
        }
        f+=2
        console.log(temp)
        temp=''
    }
}

pyramid(4)