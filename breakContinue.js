////////////////break///////////////////

const numbers = [5,6,7,8,9,10,11,12];

for(let i = 0 ; i < numbers.length ; i++ ){
    
    if(numbers[i]  > 8){
        break ;
    }
    console.log(numbers[i]);
}


//////////////////////continue ////////////////


const negNumbers = [2,-7,14,25,1,-45,14,45];

for(let i = 0 ; i< negNumbers.length ; i++){
    if(negNumbers[i] < 0){
        continue;
    }

    console.log(negNumbers[i]);
}