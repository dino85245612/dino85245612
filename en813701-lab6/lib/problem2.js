list = readInput();
displayStats(list);

function readInput(){
    let nArray=[]
    while(true){
        let n = +prompt("Enter an integer(a negative integer to quit)");
    
        if(n < 0){
            break;
    
        }else if(n > 0){
            nArray.push(n);
        }
    }
    return nArray;
}

function displayStats(inputarray){

    let sum = 0
    for(let item of list){
        console.log(sum);
        console.log(item);
        console.log(typeof(sum));
        sum += item
    }
    let avg = sum/list.length;
    let min = Math.min.apply(null, list);
    let max = Math.max.apply(null, list);

    let display = alert(`For the list ${list} the average is ${avg}, the minimum is ${min}, and the maximum is ${max}`);

    return display;
}
