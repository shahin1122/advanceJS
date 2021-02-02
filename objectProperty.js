const students = [
    {id : 21 , name: 'Jason Statham'  },
    {id : 23 , name: 'Will smith'  },
    {id : 24 , name: 'Tom crouse'  },
    {id : 25 , name: 'Tom hanks'  }
];

// let student= [] ; 

// for(let i =0 ; i< students.length ; i++){
//     student = students[3].name;
    
    
// }

// console.log(student);



const names = students.map(element => element.name);
console.log(names);


const ID = students.map(element => element.id)
console.log('Alls id numbers is '+ID);


const filterStudent = students.filter(element =>element.id > 22);
console.log(filterStudent);


