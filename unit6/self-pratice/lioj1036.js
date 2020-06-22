// LIOJ 1036：Array reverse
function reverse(arr) {
    var result = []
    for(let i=arr.length-1; i>=0; i--){
        result.push(arr[i])
    }
    return result
}

console.log(reverse([1,2,3,4,5,6]))