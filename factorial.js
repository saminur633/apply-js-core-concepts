function getsumofanarray(number){
    
    let sum = 0 ;
    for(let i = 1 ; i <= number ; i++){
        
        sum = sum + i;
        console.log(sum,i);
    }
    return sum;

}
const sum = getsumofanarray(7);
console.log(sum);
