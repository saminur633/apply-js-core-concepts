function facts(number){
    let num = 1;
    let result = 1;
    while(number <= 7){
        result = result * num;
        num++;

    }
    return result;
}
const output = facts(7);
console.log(output);