function solve(lines){
    var n = Number(lines[0])
    var m = Number(lines[1])
    for(let i =1; i<=n;i++){
        for(let j=1; j<=m;j++){
            console.log(i+'*'+j+'='+i*j)
        }

    }
}

solve([2,3])