const fibonEasy2 = (num) => {
    let total = 0;

    if(num < 2){
        return console.log("pick a more interesting number")
        
    }
    while(num > 2){
        total += num * (num-1);
        num--;
    }
    total++;
    return total;
}

const fibDynamic = (num) => {
    let total;
    const data = [];

    if(num < 2){
        return console.log("pick a better number please");
    }

    while(num > 2){
        if(data[num]){
            total += data[num];
            num --;
        } else {
            let fibOfNum = num * (num-1);
            data[num] = fibOfNum;
            total += fibOfNum;
            num--;
        }
    }
    total += 1;
    return total;
}