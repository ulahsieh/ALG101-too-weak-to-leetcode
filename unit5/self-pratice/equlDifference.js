function isValid(arr){
    if(arr.length <= 1) return true //先做一些 edge case 的判斷
    var flag = arr[1]-arr[0]
    for(let i=0; i<arr.length-1; i++){
        //console.log(arr[i+1]-arr[i])
        if(arr[i+1]-arr[i]!==flag){
            return false
        }
    }
    return true
}

console.log(isValid([1,3,5,7,9]))
console.log(isValid([1,6,9]))
console.log(isValid([1,1,1]))
console.log(isValid([1]))
console.log(isValid([]))