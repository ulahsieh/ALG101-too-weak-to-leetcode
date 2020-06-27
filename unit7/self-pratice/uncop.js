function uncop(arr){
    var a = 0
    var b = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i]==='A'){
            a++
        }else{
            b++
        }
    }

    if(a>b){
        for(let i =0; i<arr.length; i++){
            if(arr[i]==='B'){
                console.log(i+1)
            }
        }
    }else{
        for(let i =0; i<arr.length; i++){
            if(arr[i]==='A'){
                console.log(i+1)
            }
        }
    }
}