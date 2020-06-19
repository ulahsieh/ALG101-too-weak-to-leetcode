function findSecondSmall(arr){
    var smallest=Infinity
    var second=Infinity
    for(var i=0; i<arr.length; i++){
        if(arr[i]<smallest){
            second=smallest
            smallest=arr[i]
        }else if(arr[i]<second){
            second=arr[i]
        }
    }
    console.log(second)
}

findSecondSmall([7,5,2,1,8,9])