function getsumofanarray(numbers){
    let sum = 0 ;
    for(let i =0 ; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }

}
const mynumbers = [12,65,45,78,32,45,91];
getsumofanarray(mynumbers);