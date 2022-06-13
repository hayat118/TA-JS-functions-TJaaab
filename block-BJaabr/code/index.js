// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/
function convertToString(n){
  return String(n);
}
convertToString();

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(number){
  return number+1;
}
addOne(number);

// - Write a Function Expression
let addOne= function(number){
  return number+1;
}
addOne();


// - Write an Arrow Function without curly brackets(if possible)
let addOne=(number) =>  number+1;

// - Write an Arrow Function with curly brackets
let addOne=(number) => {
  return number+1;

}
addOne();


// - Execute the function
addOne(12);

// - Execute the function and store the return value in a variable.
let returnValue=addOne(12);

// - What is the typeof returnValue
// Number

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(number){
  return number-1;
}
substractOne(number);

// - Write a Function Expression
let substractOne=function(number){
  return number-1;
}

// - Write an Arrow Function without curly brackets(if possible)
let substractOne=(number) =>number-1;

// - Write an Arrow Function with curly brackets
let substractOne=(number) =>{
  return number-1;
}

// - Execute the function
substractOne(number);

// - Execute the function and store the return value in a variable.
let returnValue=substractOne(number);

// - What is the typeof returnValue
// Number;

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(a,b){
  return a+b;
}
 sum(a,b);

// - Write a Function Expression
let sum=function(a,b){
  return a+b;
}

// - Write an Arrow Function without curly brackets(if possible)
let sum=(a,b) =>a+b;

// - Write an Arrow Function with curly brackets
let sum=(a,b) =>{
  return a+b;
}

// - Execute the function
sum(a,b);

// - Execute the function and store the return value in a variable
let add=sum(a,b);

// - What is the typeof returnValue
// "number"

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/


// - Write a Function Declaration
function square(n){
  return n*n;
}
square();

// - Write a Function Expression
let square= function(n){
  return n*n;
}

// - Write an Arrow Function without curly brackets(if possible)
let square=(n) => n*n;

// - Write an Arrow Function with curly brackets
let square=(n) =>{
  return n*n;
}

// - Execute the function
square(n);

// - Execute the function and store the return value in a variable
let num=square(n);

// - What is the typeof returnValue
// "number"

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater (x,y){
    if (x>y){
       return true;
         
    }else 
      return false;
  
}
isGreater(x,y);

// - Write a Function Expression
let isGreater= function(x,y){
    if (x>y){
       return true;
         
    }else 
      return false;
}
isGreater(x,y);
// - Write an Arrow Function without curly brackets(if possible)
let isGreater=(x,y) =>(x>y);

// - Write an Arrow Function with curly brackets
let isGreater=(x,y) =>{
  return x>y;
}

// - Execute the function
isGreater(x,y);

// - Execute the function and store the return value in a variable
let returnValue=isGreater(x,y)

// - What is the typeof returnValue
// "Boolean"

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(n){
  if(n%2==0){
    return (`Number is even`)
  }else 
  return (`Number is odd`)
}
oddOrEven(n);

// - Write an anonymous Function Expression
let oddOrEven=function(n){
   if(n%2==0){
    return (`Number is even`)
  }else 
  return (`Number is odd`)
}
oddOrEven(n);
// - Write an named Function Expression

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven=(n)=>{
  if(n%2==0){
    return (`Number is even`)
  }else 
  return (`Number is odd`)
}
oddOrEven(n);

// - Write an Arrow Function with curly brackets
let oddOrEven=(n)=>
  n%2==0 ? `Number is even`: `Number is odd`;

// - Execute the function
oddOrEven(n);

// - Execute the function and store the return value in a variable
let returnValue=oddOrEven(n);

// - What is the typeof returnValue
// "number"
