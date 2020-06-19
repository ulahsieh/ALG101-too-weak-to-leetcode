function findFactor(num){
    var arr = []
    for(let i=1; i<=num; i++){
        if(num%i===0){
            arr.push(i)
        }
    }
    console.log(arr)
}

findFactor(15)
findFactor(17)
findFactor(20)