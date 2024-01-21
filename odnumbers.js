function getoddnumberarray(numbers){
    let odd = 1;
    for(i = 1; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        // 
        if(element % 2 === 0){
            console.log(index, element);

        }
        
    }

}
const mynumbers = [12,65,45,78,32,45,91];
getsumofanarray(mynumbers);
console.log(oddnumbers);