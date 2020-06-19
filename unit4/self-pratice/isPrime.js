function solve(lines){
    var len=Number(lines[0])
    for(let i=1; i<lines.length; i++){
        if(Number(lines[i])===1){
            console.log('Composite')
        }else{
            isPrime(Number(lines[i]))
        }
    }
}

function isPrime(n){
    var total = 0
    for(let i=1; i<=n; i++){
        if(n%i===0) total++
    }
    if(total>2){
        console.log('Composite')
    }else{
        console.log('Prime')
    }
}

solve([5,1,2,3,4,5])