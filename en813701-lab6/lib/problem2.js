list = readInput();
displayStats(list);

function readInput(){
    let nArray=[]
    while(true){
        let n = +prompt("Enter an integer(a negative integer to quit)");
    
        if(n < 0){
            alert(nArray);
            break;
    
        }else if(n > 0){
            nArray.push(n);
        }
    }
    return nArray;
}

function displayStats(list){
/*
TODO: use ternary operators (?)
*/
    let sum = 0
    for(let item of list){
        sum += item
    }

    console.log(sum)
    console.log(Math.max.apply(null, list))
    console.log(Math.min.apply(null, list))

    return sum;
}
