// LIOJ 1040：Array join
function join(arr, separator) {
     var result=''
     for(let i = 0 ; i < arr.length-1 ; i++){
         result= result+arr[i]+separator
     }
     result+=arr[arr.length-1]
     return result
}

console.log(join([1,2,3,4],'!'))