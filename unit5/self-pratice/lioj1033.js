function solve(lines){
    var flag = Infinity;
    var shortest = []
   // console.log(lines.length)
    for(let i=1; i<=lines.length; i++){
        for(let j=i+1; j<lines.length; j++){
            //console.log(lines[i],lines[j])
            //console.log(distance(lines[i],lines[j]))
            if(distance(lines[i],lines[j])<flag){
                flag = distance(lines[i],lines[j])
                shortest = [i ,j]
            }
        }
    }
    print(lines[shortest[0]],lines[shortest[1]])
}

function distance(pnt1, pnt2){

    var p1=pnt1.split(' ')
    var p2=pnt2.split(' ')

    var result = Math.sqrt(Math.pow(Math.abs(Number(p1[0])-Number(p2[0])),2)+Math.pow(Math.abs(Number(p1[1])-Number(p2[1])),2));
    //console.log(result)
    return result
}

function print(linesi,linesj){
	let pnt1 = linesi.split(" ")
	let pnt2 = linesj.split(" ")
	
	if(pnt1[0]===pnt2[0]){   	//x 相同
		if(Number(pnt1[1])<Number(pnt2[1])){  	//先輸出 y 較小的
			console.log(linesi)
			console.log(linesj)
		}else{
			console.log(linesj)
			console.log(linesi)
		}
	}else{ 						//x 不同 
		if(Number(pnt1[0])<Number(pnt2[0])){    //先輸出 x 較小的
			console.log(linesi)  
			console.log(linesj)
		}else{
			console.log(linesj)
			console.log(linesi)
		}
	}
}

solve(['4','2 3','1 3','1 2','1 1'])