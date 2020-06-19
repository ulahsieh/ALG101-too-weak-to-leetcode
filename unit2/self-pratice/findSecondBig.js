function secondBig(arr){
    var biggest=arr[0]
    var second=-Infinity
    for(var i=1; i<arr.length; i++){
        console.log(i, arr[i], biggest, second)
        if(arr[i]>biggest){
            second = biggest
			biggest = arr[i]
        }else if(arr[i]>second){
            second = arr[i]
        }
    }
    return second
}

console.log(secondBig([7,5]))

/* 
如果迴圈從 i=0 開始跑, biggest 的初始值又設成 var[0] 的話會有錯誤，
如果陣列為[7,5]，而陣列跑第一圈時，second 也會變成 7，結果就錯了。
要嘛就也把 biggest 初始值也設成 -Infinity
不然就 biggest = var[0]，然後迴圈從 i=1 開始跑
*/