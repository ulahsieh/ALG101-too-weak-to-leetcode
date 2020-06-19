function solve(lines){
    for(let i=1; i<=lines[0];i++){
        console.log(printTree(lines[0],i))
    }
    for(let i=1; i<lines[0];i++){
        console.log(printbuttom(lines[0]))
    }
}

function printTree(total,n){
    var line = repeat(' ',total-n)+repeat('*',2*n-1)
    return line
}
function printbuttom(n){
    var line = repeat(' ',n-1)+'|'
    return line
}

function repeat(str,n){
    var temp = ''
    for(let i=1; i<=n; i++){
        temp += str
    }
    return temp
}

solve([4])