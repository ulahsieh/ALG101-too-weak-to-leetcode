// LIOJ 1037：Array filter
// 這題 callback 會是一個 function，但難度會比較高
// 若是做不出來，也可以調整參數
function filter(arr, target){
    var result=[]
    for(let i = 0; i<arr.length; i++){
        if(arr[i]!==target){
            result.push(arr[i])
        }
    }
    return result
}

console.log(filter([1,2,3,3,4,5],3))