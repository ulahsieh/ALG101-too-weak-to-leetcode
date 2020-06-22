function isValid(str){
    switch(str[0]){
        case 'A':
            str1='10'
            break
        case 'B':
            str1='11'
            break
        case 'M':
            str1='21'
            break
    }
    var arr = str1.split('')
    for(let i=1; i<str.length; i++){
        arr.push(str[i])
    }
    //console.log(arr)

    var total = 0
    var mul = 9
    for(let i=1; i<arr.length-1; i++){
        //console.log(Number(arr[i])*mul)
        total += Number(arr[i])*mul
        mul--
        // 或是 Number(arr[i])*(10-i)
    }



    total += Number(arr[0])
    total += Number(arr[arr.length-1])
    //console.log(total)

    if(total%10===0){
        console.log('Valid')
    }else{
        console.log('Failed')
    }
    //或是 return (total % 10 === 0)

}

/* 關於字母轉數字有幾種寫法
    第一種是使用 switch case
    第二種是變成一個函式 用 if ... return 回傳數字
    第三種是宣告字母對應數字的物件放進一個函式，回傳物件[s]，就能拿到對應的數字
*/



isValid('M140051653')