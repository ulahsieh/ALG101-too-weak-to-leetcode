function perfectSquareSum(num){
    var total = 0;
    for(let i = 0; i <= num; i++){
        if(isSquare(i)) total+=i
    }
    console.log(total)
}

function isSquare(n){
    for(let i = 1; i <= n; i++){
        if(i*i===n){
            return true
        }
    }
    return false
}

perfectSquareSum(30)