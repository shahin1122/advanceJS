function stopWatch() {
    let count = 0;
    return function () {
        count++
        return count ;
    }
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());


const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());


console.log(clock1());
console.log(clock1());



/*Closer  = if we call a function form a function 
or return , then it create a close invironment.

*/