function fib(n){
    var arr = []
    arr[0] = 0
    arr[1] =1

    for(let i = 2; i<=n; i++){
        arr.push(arr[i-1] + arr[i-2])
    }
    return arr[n]
}

console.log(fib(8))