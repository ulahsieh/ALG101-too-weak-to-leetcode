function solve(lines){
    var num1 = Number(lines[0].split(' ')[0])
    var num2 = Number(lines[0].split(' ')[1])
    //console.log(num1,num2)
    for(let i=num1; i<=num2;i++){
        isDaffodils(i)
    }
}


function isDaffodils(num){
    var flag = num
    var arr = []
    var total = 0
    while(flag>=10){
        arr.push(flag % 10)
        flag = Math.floor(flag/10)
    }
    arr.push(flag)
    //console.log(arr)
    for(let i=0; i<arr.length; i++){
        total += pow(arr[i],arr.length)
    }
    if(num===total){
        console.log(num)
    }
}

function pow(n, m){
    var result = 1
    for(let i=0; i<m; i++){
        result *= n
    }
    return result
}

solve(['5 200'])