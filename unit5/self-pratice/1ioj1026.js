function isProportional(arr){
    var flag = arr[1] / arr[0]

    for(let i = 1; i < arr.length; i++) {
        if(arr[i]/arr[i-1]!==flag){
            return 'no'
        }
    }
    return 'yes'
}

console.log(isProportional([3, 9]))