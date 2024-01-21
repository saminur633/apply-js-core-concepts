function milestokm(miles){
    const km = miles*1.609;
    return km;
}
const mykm = 7;
const mykilomter = milestokm(mykm);
console.log(mykilomter);