///////// LIOJ 1008 幾個水桶 ////////////
function howmany(lines) {
        var total = Number(lines[0])
        var times = 0
        if(total%2===1){
          times++
            total-=1
        }
        while(total>0){ 
            var flag2pow = 0
            while(Math.pow(2,flag2pow)<=total){
                flag2pow++
            }
            flag2pow-=1
            //console.log('total, math.pow',total, Math.pow(2,flag2pow))
            total -= Math.pow(2,flag2pow)
            times++
            //console.log('total left', total)
        }
        console.log(times)
      
    }
    howmany(['22'])
    /////////////// 順便放 Lioj 上原先寫的  //////////////////////
    function solve(lines) {
        let i = 0;
        let temp = lines[0];
        let output =0;
        
        if (lines[0] % 2 === 1){
            temp -= 1  // 把總數先變成偶數
            output +=1 // 把 2的 0次方 1 加進結果的個數
        }
            
        do{
            i++
            if(Math.pow(2, i) >= lines[0]){break}
        }while(true)
        for(let j = i-1; j>0; j--){  //j=4 3
            if(Math.pow(2, j)===temp){
                output += 1
                break;
            }else{
                if(temp > Math.pow(2, j)){
                temp -= Math.pow(2, j)
                output += 1
                }
            }
        }
        console.log(output)
        
    }