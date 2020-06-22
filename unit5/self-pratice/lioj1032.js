function solve(lines){
    var arr = []
    for(let i = 0; i<Number(lines[0]); i++){
        for(let j = 4*i+1; j<=4*i+4; j++){
            arr.push(Number(lines[j]))
        }
        //console.log(arr)
        console.log(distance(arr).toFixed(2))
        arr = []
    }
}

function distance(arr){
    var result = Math.sqrt(Math.pow(Math.abs(arr[2]-arr[0]),2)+Math.pow(Math.abs(arr[3]-arr[1]),2));
    return result
}

solve([2,1,1,2,2,3,3,4,4])