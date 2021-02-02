// const number = [3,5,6,3,5,7,8];
// const output = [];

// for(let i = 0 ; i< number.length ; i++){
//     const element = number[i];
//     const result = element * element ;
//     output.push(result);
// }

// console.log(output);




/////////////////// another way/////////////////////////////


const number1 = [3,5,6,3,5,7,8];


const res = number1.map(function (element) {
    return element*element ;
})

console.log(res);



//////////////////// shortest way////////////////////////////


const number2 = [30,50,60,30,50,70,80];


const square = number2.map(element => element*element);
console.log(square);


//////////////////filter///////////////////////////////



const number3 = [6,12,4,12,1,2,3,45,4,8,7,8,5];

// ////////////////for upper 5///////////////////////

const filterMe =number3.filter(element => element>5);
console.log(filterMe);


/////////////////////// for lower than 5//////////////////////

const filterYou = number3.filter(element => element<5);
console.log(filterYou);



/////////////////////////////// find //////////////////////

const findMe = number3.find(element => element>5);
console.log(findMe);









