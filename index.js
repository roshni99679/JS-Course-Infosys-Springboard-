console.log("This content is from external JavaScript file");

let name="William";  
console.log("Welcome to JS course, Mr."+name);  
 
// let name = "Goth"; /* This will throw an error because the identifier  'name' has been already declared and we are redeclaring the variable, which is not allowed using the 'let' keyword. */ 
// console.log("Welcome to JS course, Mr."+name); 



const pi = 3.14;  
console.log("The value of Pi is: "+pi);  
  
// pi = 3.141592; /* This will throw an error because the assignment to a const needs to be done at the time of declaration and it cannot be re-initialized. */ 
// console.log("The value of Pi is: "+pi); 


var myname = "William";  
console.log("Welcome to JS course, Mr." + myname);  
var myname = "Goth"; /* Here, even though we have redeclared the same identifier, it will not throw any error.*/ 
console.log("Welcome to JS course, Mr." + myname); 

document.write(typeof "hello")

let x,y=5
console.log(x);
console.log(y);
//op: undefined and 5
    

let num1 = 20;
let num2 = "20";
console.log(num1==num2);
console.log(num1===num2);
//op: true; false

var check = 'a';
switch(check){
    case 'A':document.write('Lower and Uppercase letters are same for JavaScript');              
    case 'a':document.write('Lower and Uppercase letters are different for JavaScript');                
    default:document.write('Lower and Uppercase letters cannot be compared in JavaScript');            
}
//op:Lower and Uppercase letters are different for JavaScript Lower and Uppercase letters cannot be compared in JavaScript

let names = 'Default';
let firstName = 'Nisha';
let lastName = 'Mehta';
//name =firstName+''+lastName; 
document.write('Your full name is: ' + names);
//op:Your full name is: Default

let num = 10;
for (counter = 0; counter < num; counter++) {
	if (counter % 2 == 0) {
		document.write(counter + num, " ");
	}
} 
//op: 10 12 14 16 18


function sayHello(x, y) {
    console.log('Hello' + ' ' + x[1]);
}
sayHello(['Heena', 'Rita']); 
//OP:Hello Rita

function demo() {
    let dept = "ETA";
    console.log(dept);
}
let dept = "FSADM";
demo();
console.log(dept);
//OP:ETA FSADM

let addValues = (a=30,b) => a+b;
console.log(addValues(35));
//op:NAN
//a=35, b=undefined and 35 + undefined = NaN

let movie = { name: "Galaxy of guardians", type: "Hollywood" };
let movieProperty = "rating";
movie["current" + movieProperty] = 5;
//Choose the right option to access the computed property at line 3.
//op:console.log(movie.currentrating);

class Person {
	constructor(name, age) {
		this._pname = name;
		this._page = age;
	}
	display() {

		console.log("name :" + this.pname);
		console.log("age :" + this.page);
	}
	set pname(namePerson) { this._pname = namePerson; }
	get pname() { return this._pname; }
}
let per = new Person();              // line 8
per.pname = "Rexha";                 // line 9
console.log(per.pname);              // line 10
let per1 = new Person("Alex", 10);   // line 11
console.log(per1.pname);             // line 12
//op:Line 10 displays Rexha and line 12 displays Alex

// Joe wants to create reusable utility functions using JavaScript. Help him meet the requirement by selecting appropriate option from the options given below.
// 1.Create a Class with Public access modifier
// 2.Create a Class with Static keyword
// 3.Create a Class with Protected access modifier
// 4.Create a Class with Static methods
//ans: 4.Resusable functions can be created with Static keyword and they can be accessed without creating instance of the declared Class. 


//Predict the output of the below-mentioned code snippet.
// <input type='text' id='text1' onkeyup="console.log('Task 1')" onkeydown="console.log('Task 2')" onkeypress="console.log('Task 3')"> 

//ans:  Task 2 Task 3 Task 1. Because First keydown will happen, followed by keypress and lastly key release will happen is Correct

// Explanation :

// Events will be raised in the following order: keydown, keypress, keyup. 


// Ryan is trying to create an email account. During the registration process, as soon as he focuses on the name field and enters the character to fill his name, he gets a message - 'This name is taken'. 
// We understand that the website is using JavaScript Event-handling to respond to the data entered by Ryan. Which event do you think is triggering the JavaScript code for the account to check the value entered by the user?

// onfocus
// onblur
// onkeypress
// onkeyup
//ans:  onkeyup is Correct

// Explanation :
// When the user releases any keyboard's key, automatically event handler of onkeyup handles it. So, this event will be the best one to use for accomplishing this task. 


//Find the output of the given code :

{/* <html> 
<script> 
	function remove() { console.log('Remove1 code') }
	function remove() { console.log('Remove2 code') }
	function remove() { console.log('Remove3 code') } 
</script> 
<body> 
	<button onclick="remove()">Remove</button> 
</body> 
</html>  */}

// Error - JavaScript does not support function overloading mechanism
// Remove1 code
// Remove2 code
// Remove3 code
//ans: Remove3 code is Correct

// Explanation :

// remove() got overloaded twice, and the recent one will be in the scope.


let dateObject1 = new Date(); 
document.write("Date is: " + dateObject1.getDate()); 
document.write("Day is: " + dateObject1.getDay()); 
document.write("Year is: " + dateObject1.getYear()); 
document.write("Hours: " + dateObject1.getHours()); 
document.write("Month is: " + dateObject1.getMonth()); 
document.write("Time is: " + dateObject1.getTime()); 
document.write("Millisecond: " + dateObject1.getMilliseconds()); 
// Date is: 5Day is: 2Year is: 122Hours: 17Month is: 3Time is: 1649160906399Millisecond: 399

let dateObject2 = new Date(); 
dateObject2.setDate(3); 
dateObject2.setYear(1996); 
dateObject2.setHours(8); 
dateObject2.setMonth(7); 
dateObject2.setMilliseconds(2000); 
 
document.write("Date is: " + dateObject2.getDate()); 
document.write("Year is: " + dateObject2.getYear()); 
document.write("Hours: " + dateObject2.getHours()); 
document.write("Month is: " + dateObject2.getMonth()); 
document.write("Millisecond: " + dateObject2.getMilliseconds()); 
//Date is: 3Year is: 96Hours: 8Month is: 7Millisecond: 0

let myString = "Rosh Rosh"; 
document.write("Length is: " + myString.length); 
//op:Length is: 9

let String = "Rosh Rosh"; 
document.write("Char at Position 4 is: " + String.charAt(3));  
//op:Char at Position 4 is: h

let random1 = "Rosh Rosh"; 
let random2 = "Rosh Rosh"; 
let random3 = "Rosh Rosh"; 
document.write("concanated string is: " + random1.concat(random2,random3)); 
//op:concanated string is: Rosh RoshRosh RoshRosh Rosh

let newString = "RoshRosh"; 
document.write("index of 's' is: " + newString.indexOf("s")); 
//op:index of 's' is: 2

let a1="Hello bro , how you doing ?"
document.write("Checking out split...........<br/>")
document.write(a1.split(" "))
document.write("<br/>")
document.write(a1.split(","))
document.write("<br/>")
document.write(a1.split("?"))
document.write("<br/>")
//op:
// Hello,bro,,,how,you,doing,?
// Hello bro , how you doing ?
// Hello bro , how you doing ,

a2=a1.slice(2,6)
document.write(a1.slice(2,6),a2.length)
document.write("<br/>")
document.write(a1.slice(2))
document.write("<br/>")
document.write(a1.slice())
document.write("<br/>")
//op:
// llo 4
// llo bro , how you doing ?
// Hello bro , how you doing ?

document.write("Substring.")
document.write("<br/>")
document.write(a1.substring(2,6))
document.write("<br/>")
document.write(a1.substring(2))
document.write("<br/>")
document.write(a1.substring())
document.write("<br/>")
document.write(a1.substring(-1))
document.write("<br/>")
//op:
// llo
// llo bro , how you doing ?
// Hello bro , how you doing ?
// Hello bro , how you doing ?

document.write(a1.toLowerCase())
document.write("<br/>")
document.write(a1.toUpperCase())
document.write("<br/>")
//op:
// hello bro , how you doing ?
// HELLO BRO , HOW YOU DOING ?

let myPattern = /@gmail.com/; 
let a3="mark.christ@gmail.com"; 
document.write(a3.search(myPattern));
document.write("<br/>")
document.write(a3.replace(myPattern,'@facebook.com')); 
document.write("<br/>")
//op:
// 11
// mark.christ@facebook.com

document.write(Math.max(12,12.1,12.01))
document.write("<br/>")
document.write(Math.min(0,0.0,0.00,12,12.1,12.01))
document.write("<br/>")
document.write(Math.round(12.01))
document.write("<br/>")
document.write(Math.round(12.05))
document.write("<br/>")
document.write(Math.round(12.09))
document.write("<br/>")
document.write(Math.ceil(12.01))
document.write("<br/>")
document.write(Math.floor(12.01))
document.write("<br/>")
document.write(Math.random())
document.write("<br/>")
document.write(Math.random(1,2))
document.write("<br/>")
document.write(Math.sqrt(4))
document.write("<br/>")
//op:
// 12.1
// 0
// 12
// 12
// 12
// 13
// 12
// 0.5234247415911071
// 0.23525684307488715
//2



let stringJSON = '{"firstName":"Sam","lastName":"Fernandes"}' 
let obj = JSON.parse(stringJSON); 
document.write(obj)
document.write("<br/>")
let dataJSON = { firstName: "Sam", lastName: "Fernandes" }; 
let obj2 = JSON.stringify(dataJSON); 
document.write(obj2); 
// [object Object]
// {"firstName":"Sam","lastName":"Fernandes"}

// x1=document.getElementById("heading").innerHTML;
// document.getElementById.innerHTML = "Heading generated dynamically" 


let originalstring="Iota is very-good company!";   
let updatedString=originalstring.split("");   
console.log(updatedString); 

let companies= ["C1", "C2", "C3", "C4"];  
companies.splice(2, 0, "C5");  
document.write(companies); 
document.write("<br>")

let arr=new Array(3)
document.write(arr.length)
document.write("<br>")
arr[0]="apple"
arr[1]="mango"
arr[2]="lime"
arr[3]=2
document.write(arr,arr.length)
document.write("<br>")
// 3
// apple,mango,lime,2
// 4

let numArr = [10, 5, 20];
document.write(Math.max(...numArr)); 
document.write("<br>")
document.write(Math.max(numArr)); 
document.write("<br>")
//20
//NAN

let arr1=[1,2,3,4]
let arr2=[6,7,8]
let arrs=[0, ...arr1, 5, ...arr2]
document.write(arrs)
document.write("<br>")
document.write(arrs[2])
document.write("<br>")
// 0,1,2,3,4,5,6,7,8
// 2

let copy=[...arrs]
copy.push("new")
document.write(copy)
document.write("<br>")
// 0,1,2,3,4,5,6,7,8,new

let emparr=["Roshni",123456,"Mumbai"]
let [emp_name,id,place]=emparr
let [kuchbhi,...rest]=arr1
document.write(emp_name,place,id)
document.write("<br>")
document.write(kuchbhi, " " , ...rest)
document.write("<br>")

for (i=0;i<emparr.length;i++){
	document.write(i,emparr[i])
}
document.write("<br>")
// RoshniMumbai123456
// 1 234
// 0Roshni11234562Mumbai

let array=["apple","mango",1,3.4,"random"]
array.splice(0,0,"i am added using splice")
document.write(array)
document.write("<br>")
array.push("i am added using push")
document.write(array)
document.write("<br>")
document.write("i am returned using pop : ",array.pop())
document.write("<br>")
document.write(array)
document.write("<br>")
array.unshift("i am added using unshift")
document.write(array)
document.write("<br>")
document.write("i am returned using shift : ", array.shift())
document.write("<br>")
document.write(array)
document.write("<br>")
document.write(arr1.concat(arr2))
document.write("<br>")
document.write(arr1.concat(["added using concat"]))
array.slice(0,4)
document.write("<br>")
document.write("slice :",array)
// i am added using splice,apple,mango,1,3.4,random
// i am added using splice,apple,mango,1,3.4,random,i am added using push
// i am returned using pop : i am added using push
// i am added using splice,apple,mango,1,3.4,random
// i am added using unshift,i am added using splice,apple,mango,1,3.4,random
// i am returned using shift : i am added using unshift
// i am added using splice,apple,mango,1,3.4,random
// 1,2,3,4,6,7,8
// 1,2,3,4,added using concat
// slice :i am added using splice,apple,mango,1,3.4,random


let brands= ["Google", "Facebook", "Twitter", "Apple"];
brands.splice(2, 0, "Samsung");
console.log(brands);
// Option Google, Facebook, Samsung, Twitter, Apple is Correct
// Explanation :
// splice(2,0,"Samsung") -> At position 2, add the new item, "Samsung" and remaining elements remain unchanged

let myArray=[1,2,4];
const [first,,last]=myArray;
console.log(last);
// 4

let myArr = [];
for (i = 0; i < 3; i++) {
    myArr.push(function () {
        console.log(i);
    })
}
for (j = 0; j < 3; j++) {
    myArr[j]();
}
// 3 3 3
// Explanation :
// This code will perform the following things.
// 1. In the first loop, it will push the function with console statement into an array, and at end of the loop, i value will be 3.
// 2. In second loop, myArr[j]() will invoke the function inside the Array and prints the value of i.
// So the output will be 3 3 3.



console.log("Asynchronous programming")
// console.log("Before For loop execution");
// for (var i = 0; i < 2; i++) {
//     console.log("setTimeout message");
//     func1();
//     func2();
// }
// console.log("After For loop execution");
// function func1() {
//     console.log("Am in func1");
// }
// function func2() {
//     console.log("Am in func2");
// }


// for (var i = 0; i < 2; i++) {
//     setTimeout(function() {
//         console.log("setTimeout message");
//         func1();
//     }, );
//     func2();
// }
//op:
// Asynchronous programming
// index.js:440 Before For loop execution
// index.js:442 setTimeout message
// index.js:448 Am in func1
// index.js:451 Am in func2
// index.js:442 setTimeout message
// index.js:448 Am in func1
// index.js:451 Am in func2
// index.js:446 After For loop execution

// 2index.js:451 Am in func2
// index.html:43 Live reload enabled.
// index.js:457 setTimeout message
// index.js:448 Am in func1
// index.js:457 setTimeout message
// index.js:448 Am in func1

// What will be the output of the below code snippet?

// new Promise(function (resolve, reject) {
// 	setTimeout(square = (x) => resolve(x * x), 5000);
// }).then(function (data) { console.log(data); });
// square(5);
// 25
// 10
// NaN
// 50
// Option 25 is Correct
// Explanation :
// Since x= 5 so 5*5= 25

// What will be the output of the below code snippet?

// new Promise(function (resolve, reject) {
// 	let b;
// 	setTimeout(compute = (a) => resolve(a + b), 10000);
// 	b = 25;
// }).then(function (data) { console.log(data); });
// compute(5);
// // 5
// 30
// NaN
// Undefined
// Option 30 is Correct
// Explanation :
// Since a = 5 and b=25 so 5+25= 30


// Which of the following methods will return the body from the response object as binary data in fetch()?

// response.formData()
// response.text()
// response.blob()
// response.json()
// Option response.blob() is Correct
// Explanation :
// This method returns the response body as binary data

// Q4 of 4
// Select any two statements which are incorrect about Async/Await.

// Async function always return a promise
// Await keyword can be used in regular functions
// Async/Await uses then, catch and finally for error handling
// Await pauses the execution of async function and resumes when Promise is settled
// Option Await keyword can be used in regular functions is Correct

// Explanation :
// Await keyword, when used in regular functions throws a syntax error.
// Option Async/Await uses then, catch and finally for error handling is Correct
// Explanation :
// Async/await uses try, catch and finally for error handling




// Q1 of 3
// Consider the code written in display.js

// let dis = function(stringMsg){console.log("Your message is : "+stringMsg);};
// export default dis;
// Which of the below is an incorrect way of importing the display module in the index.js file?

// import display from './display.js'; display("Hello Welcome to the course of JavaScript");
// import dis from './display.js'; dis("Hello Welcome to the course of JavaScript");
// import display from './display.js'; dis("Hello Welcome to the course of JavaScript")
// import disp from './display.js'; disp("Hello Welcome to the course of JavaScript");
// Option import display from './display.js'; dis("Hello Welcome to the course of JavaScript") is Correct
// Explanation :
// We are importing a function as display and using it as dis.  

// Q2 of 3
// Consider the below code snippets:
// calculator.js:

// const calculator{
//     add:(a, b) => a + b;
// }
// default calculator;

// index.js:
// import calculator from "./calculator.js";
// console.log(calculator.add(10, 20));

//  What will be the output?
// 10
// 10 20
// 30
// Error
// Option Error is Correct
// Explanation :
// The export keyword is missing while exporting the function.  

// Q3 of 3
// Consider the below module definition:

//mymodule.js
// export function a() {
//     //some logic here
// }
// export function b() {
//     //some logic here
// }
// Which of the below lines rightly imports all the methods of mymodule.js?

// import * from “./mymodule”
// import * from “,/mymodule.js”
// import as “./mymodule”
// import * as mymodule from “./mymodule”
// Option import * as mymodule from “./mymodule” is Correct
// Explanation :
// Whenever we are exporting default functionality, alias name should be there. So this is the correct way to import all the methods


document.write("<br>")
let myList=["Edison","Tesla","Einstein"];
let [,a]=myList;
document.write(a); 
//Tesla


document.write("<br>")
let lis = [
	{ alterEgo: 'Bruce Wayne', city: 'Gotham City' },
	{ alterEgo: 'Oliver Queen', city: 'Star City' },
	{ alterEgo: 'Barry Allen', city: 'Central City' }
];
let [, , darkKnight] = lis;
function cityHunter({ alterEgo: x, heroName: y, powers: k, city: z }) {
	document.write(x + '-' + y + '-' + k + '-' + z);
}
cityHunter(darkKnight);
//Barry Allen-undefined-undefined-Central City


//a
let ax = [1, 2, 3]; 
let by = [4, 5, 6]; 
const combinedArray1 = [...ax, ...by]; 
console.log("one "+combinedArray1); 
//b
let z = [3, 4, 5, 6]; 
const combinedArray2 = [1, 2, ...z]; 
console.log("two "+combinedArray2);
//c
let aa = [3, 4, 5, 6]; 
const combinedArray3 = [1, 2, ...z]; 
console.log("three "+aa); 
//one 1,2,3,4,5,6
//two 1,2,3,4,5,6
//three 3,4,5,6


const result = []; 
function checks(par1, ...par2) { 
 return result.push(par1, par2); 
} 
console.log(checks("Hello", "World")); 
//2


let output = [] 
var component = (...par1) => { 
output = [...par1]; 
return output.filter((a) => a.includes('Script')); 
} 
console.log(component('ES6', 'JavaScript', 'CoffeeScript', 'React')); 
//['JavaScript', 'CoffeeScript']


let employee = { 
	 empId: 'I1001', 
	 empName: { 
	 firstName: 'John', 
	 middleName: 'Thomson', 
	 lastsName: 'Mark' 
	 }, 
	 empStatus: 'active' 
	}; 
let { firstName: middleName, lastsName } = employee.empName; 
console.log(middleName); 
//John

var temp = "8080"; 
if (true) { 
 const temp = 8080; 
 console.log(typeof temp); 
} 
//number

let employeeList = [ 
	 { id: "I1001", name: "Tom" }, 
	 { id: "I1002", name: "Jack" }, 
	 { id: "I1003", name: "Tim" }, 
	 { id: "I1004", name: "Sam" } 
	]; 
console.log(`Emp Id: ${employeeList[0].id} Emp Name: ${employeeList[0].id}`); 
//Emp Id: I1001 Emp Name: I1001


let empId = 'I10050000' 
let employees = { 
	 empId, 
	 getEmpDetails() { 
	 return this.empId; 
	 }, 
	
	 getDetails() { 
	 setInterval(() => { return this.empId }, 1000); 
	 } 
	} 
console.log(employees.getEmpDetails()); 
console.log(employees.getDetails()); 
// I10050000
// undefined


let studentsData={ 
	name:"John", 
	country:"India" 
}; 
var dynamicProperty="age"; 
studentsData[dynamicProperty]=25; 	
var dynamicProperty="city"; 
studentsData.dynamicProperty="Pune";     //error wala statement
console.log(studentsData.age);
console.log(studentsData.city); 
//25
//undefined


// let myArrays=new Array([1,2,3]);
// myArrays.delete(1); 
// console.log(myArrays); 
//delete is not a method of array

let namess = "Sam" 
function demo() { 
	let namess="jack"
    namess += "Mark" 
} 
console.log(namess); 
//Sam


const cars=[{'Name':'Toyota','Cost':324323},{'Name':'Benz','Cost':2216}];
const xx = cars.reduce((a,b)=>a+b.Cost,5);
console.log(xx)
//326544(actual addition +5)


// let states=[];
// states.push(['Rihanna',
// {
// empId:'I1001',
// city:'BNG',
// age:25
// }]);
// console.log(...state)
//state is not defined


let statess=[];
statess.push(['Rihanna',
{
empId:'I1001',
city:'BNG',
age:25
}]);
console.log(...statess)
//(2) ['Rihanna', {…}]
// 0: "Rihanna"
// 1: {empId: 'I1001', city: 'BNG', age: 25}
// length: 2
// [[Prototype]]: Array(0)


class Persons { 
 constructor(friends) { this.friends = friends; } 
} 

class Employee extends Persons { 
 constructor(friends) { super(friends) } 
 displayFriends() { 
 for (let friend of friends) { 
 console.log(friend) 
 } 
 } 
} 

let friendList = ["John", "Tom", "Tim", "Jack", "Sam", "Richard", "Mark", "James"]; 
let xxx = new Employee(friendList); 
xxx.displayFriends(); 

//Uncaught ReferenceError: friends is not defined
// at Employee.displayFriends (index.js:767:21)
// at index.js:775:5