function fizzbuzz(n){
    for(let i=1; i<=n; i++){
        if(i%3===0 && i%5===0){
            console.log("FizzBuzz")
        }else if(i%3===0){
            console.log("Fizz")
        }else if(i%5===0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}
fizzbuzz(25)


/*
下面的版本會比上面來得好，
因為如若今天要加一個 7 的倍數，
如果使用上面的寫法，則須多加上四行程式碼，
如果數字增加愈多，則需增加的程式碼會更多，
但如果是下面的版本，則只需要加上一行 code 即可。
*/

function betterFizzbuzz(n){
  for(let i=1; i<=n; i++){
     var result=""
     if(i%3 === 0) result += "Fizz"
     if(i%5 === 0) result += "Buzz"
     if(i%7 === 0) result += "Woof"
     if(result.length > 0)
       console.log(result);
     else
       console.log(i);
  }
}
betterFizzbuzz(35)
