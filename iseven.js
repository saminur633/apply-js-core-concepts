function isgiven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const mynumberIsgiven = isgiven(303);
console.log(mynumberIsgiven);
const hernumberIsgiven = isgiven(400);
console.log(hernumberIsgiven);
