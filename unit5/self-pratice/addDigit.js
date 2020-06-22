function addDigit(n){
    n += '';
    var arr = n.split('');
    var total = 0;
    for(let i=0 ;i<arr.length; i++){
        total += Number(arr[i])
    }
    console.log(total)
}

addDigit(123)