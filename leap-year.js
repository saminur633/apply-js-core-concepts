function leapyear(year){
    const leap = year % 4;
    if(leap === 0){
        return true;
    }
    else{
        return false;
    }
}
const myLeapYear = leapyear(2001) ;
console.log(myLeapYear);
const hisLeapYear = leapyear(2024);
console.log(hisLeapYear);