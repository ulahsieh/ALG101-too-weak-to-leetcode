function cardValid(str){
    str=str.split('-');
    str=str.join('');
    var total = 0;
    for(let i = 0; i < str.length-1; i++){
        if(i%2===0){  //奇數為
            if(Number(str[i])*2>=10){
                total += (Number(str[i])*2) - 9
            }else{
                total += Number(str[i])*2
            }
        }else{ //偶數
            total += Number(str[i])
        }
    }
    console.log(total)
    total = total % 10
    total = 10 - total
    console.log(str[str.length-1])
    if(total==str[str.length-1]){
        if(str[0]==5){
            return 'Master Card'
        }else if(str[0]==4){
            return 'visa'
        }
    }else{
        return 'invalid'
    }
}

console.log(cardValid('5412-3456-7890-1232'))