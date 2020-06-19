//取價值最高的 C 項物品

function greedyThief(lines){
    var max = Number(lines[0])
    var item = Number(lines[1])
    var arr = []
    var total = 0
    for(let i=0; i<item; i++){
        arr.push(Number(lines[2+i]))
    }
    //console.log(arr)
    for(let i=1; i<=max; i++){
        total += theBiggestIndex(arr)[1]
        arr.splice(theBiggestIndex(arr)[0],1)
    }
    console.log(total)
}

function theBiggestIndex(arr){
    var big = 0
    var index = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i]>big){
            big=arr[i]
            index = i
        }
    }
    return [index, big]
}

greedyThief(['3','5','1','3','5','7','9'])



/////////// 比較一下原先在 lioj 上的原始版本 ////////////


function solve(lines) {
    let arr = [];
	let newArr = [];
	let output = 0;
	for(let i=0; i<lines[1]; i++){
		arr.push(lines[i+2])
	};
	
	for(i=0; i<lines[1]; i++){
		let tmp = 0;
		for(let j=1; j<arr.length;j++){
			if(Number(arr[j])>Number(arr[tmp])){
				tmp = j;
			};
		};
		newArr.push(arr[tmp]);
		arr.splice(tmp,1);
	};
	if(lines[0]<lines[1]){
		for(i=0;i<lines[0];i++){
			output += Number(newArr[i]);
		}
	}else{
		for(i=0;i<newArr.length;i++){
			output += Number(newArr[i]);
		}
	}
	console.log(output);
}