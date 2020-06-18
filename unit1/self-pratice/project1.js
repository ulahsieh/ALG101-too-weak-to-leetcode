// 找最小值----------------------
function smallest(arr){
    var smallest = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i]<smallest){
            smallest = arr[i]
        }
    }
    return smallest
}
var arr = [100, 8, 4, 52, 2, 74, 35]
console.log(smallest(arr))

//反轉字串-----------------------------

function inverseStr(str){
    var result =''
    for(let i=str.length-1; i>=0; i--){
        result += str[i]
    }
    return result
}
console.log(inverseStr('hello'))

//陣列總和-----------------------

function sumArr(arr){
    var result=0
    for(let i=0; i<arr.length; i++){
        result+=arr[i]
    }
    return result
}
var arr=[1,2,3,4,5,6,7,8,9]
console.log(sumArr(arr))

//找最大值--------------------------

function biggest(arr){
    var biggest = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i]>biggest) biggest=arr[i]
    }
    return biggest
}
var arr = [5,77,32,53,12,67,23]
console.log(biggest(arr))
