///////////////////////////slice///////////////////

const numbers = [1,2,3,4,5,6,7,8];
const part = numbers.slice(1,5);
console.log(part);




/*


slice , slicing numbers by array element wise bt there will be
no change in original array element, like ,  
*/

console.log(numbers);



////////////////////////////////splice///////////////////////////

const remove  =numbers.splice(2,3 );  
console.log(remove);
console.log(numbers); //cut form origianl numbers 

//cuting form 2 and number  of cutting elements is 3 then we can inject another numbers

const together = numbers.join(' ,')// using  comma , or anything we can use
console.log(together);

