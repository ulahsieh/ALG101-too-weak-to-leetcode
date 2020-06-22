// LIOJ 1038：Array indexOf
function indexOf(arr, searchElement) {
    var result
    for(let i=0; i<arr.length; i++){
        if(arr[i]===searchElement) return i
    }
    return -1
}