

// const age = 21;
// let score = 65;
// console.log(age);
// console.log(score);
// score++;
// console.log(score);

// const name = 'Muhammad Abdullah';
// // Concatenation string
// console.log('I am ' + name + ' and age is ' + age);
// // Template string 
// console.log(`I am ${name} and age is ${age}`);
// const about = `I am ${name} and age is ${age}`;
// console.log(about);
// //
// console.log(name.toUpperCase());
// console.log(name.split(' '));
// console.log(name.substring(0,8).toUpperCase());

// //Array

// const cricket = ['Wickets','balls',];
// console.log(cricket);
// cricket[2] = 'bats';
// cricket.push('players');
// console.log(cricket);
// cricket.pop();
// console.log(cricket);
// console.log(Array.isArray(cricket));
// console.log(cricket.indexOf('balls'));

//object lateral

// const office = {
//     officeName:'Mikruniche',
//     person: 4,
//     room: 2,
//     employees: ['abdulaleem','shahziab','ateeq','abdullah'],
//     address:{
//         street: 5,
//         city: 'Rawalpindi',
//         province: 'Punjab'
//     }
// }

// console.log(office.address.city , office.officeName);
// const {officeName,room,address:{city}} = office;
// console.log(city);

//Todos
// const todos = [
//     {
//         id: 1,
//         text:"trash",
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text:"meeting",
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text:"appointment",
//         isCompleted: false
//     }
// ]

// console.log(todos);
// console.log(todos[1].text);

// JSON

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

//for
// for(let i of todos)
// {
//    console.log(i.text);
// }

// forEach
// todos.forEach(function(i){
//     console.log(i.text);
// });
// todos.forEach((i) => console.log(i));

// //map
// const returnText = todos.map(function(i){
//     return(i.text);
// });
// console.log(returnText);

//filter
// const Completed = todos.filter(function(i)
// {
//     return i.isCompleted === true;
// });
// console.log(Completed);

//filter+map
// const Completed = todos.filter(function(i)
// {
//     return i.isCompleted === true;
// }).map(function(i)
// {
//     return i.text;
// })
// console.log(Completed);

//ternary operator
// const x = 5;
// const color = x === 5 ? 'blue':'red';
// console.log(color);

//function
// function addNumber(number1,number2){
// console.log(number1 + number2);}
// addNumber(4,3);
// const addNumber = (number1, number2) => number1 + number2;
// console.log(addNumber(5,6));
// const addNumber = (number1, number2) => 
//     {
//         return number1 + number2;
//     }
// console.log(addNumber(5,2));

//constructor function
// function Student(firstName, secondName, dob)
// {
//     this.firstName = firstName;
//     this.secondName = secondName;
//     this.dob = new Date(dob);
//     // this.getBirthYear = function()
//     // {
//     //     return this.dob.getFullYear();
//     // }
//     // this.fullName = function()
//     // {
//     //     return `${this.firstName} ${this.secondName}`;
//     // }
// }
// Student.prototype.getBirthYear = function()
// {
//     return this.dob.getFullYear();
// }
// Student.prototype.fullName = function()
//     {
//         return `${this.firstName} ${this.secondName}`;
//     }
// //instantiate object
// const student1 = new Student("Muhammad","Abdullah","1-5-2003");
// const student2 = new Student("Muhammad","Abdulaleem","1-6-2003");
// console.log(student1.secondName);
// console.log(student2.getBirthYear());
// console.log(student2.fullName());


//class
// class Student
// {
//     constructor(firstName,secondName,dob)
//     {
//         this.firstName = firstName;
//         this.secondName = secondName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear()
//     {
//         return this.dob.getFullYear();
//     }
//     fullName()
//     {
//         return `${this.firstName} ${this.secondName}`;
//     }
// }
// const student1 = new Student("Muhammad","Abdullah","1-5-2003");
// const student2 = new Student("Muhammad","Ali","4-3-2007");
// console.log(student1.secondName);
// console.log(student1.getBirthYear());
// console.log(student2.fullName());

// single selector
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// multi selector
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// const items = document.querySelector('.items');
// // items.lastElementChild.remove();
// // items.remove();
// items.firstElementChild.textContent = 'Home';
// items.children[1].innerText = 'About us';
// items.lastElementChild.innerHTML = '<h1> Contact </h1>';
// const botton = document.querySelector('.btn');
// // botton.style.background = 'blue';
// botton.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log("Click");
//     // document.querySelector('#my-form').style.background = 'yellow';
//     document.querySelector('body').classList.add('bg-dark');
    
// });

// botton.addEventListener('mouseover' , (mo) => {
//     botton.style.background = 'blue';
// })

// botton.addEventListener('mouseout' , (m) => {
//     botton.style.background = 'black';
// })
