/*
題目的數字範圍在 number 的安全範圍內, 沒有該注意的地方
*/
function soulmate(lines){
    var num1 = lines[0].split(' ')[0]
    var num2 = lines[0].split(' ')[1]
    //console.log(num1, num2)
    if(num1===num2){
        console.log('Yes')
    }else{
        console.log('No')
    }
}
soulmate(['10 20'])
    