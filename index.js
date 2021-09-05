// Follow and code along with the examples here
// output to terminal enter-> node index.js 

function sayHelloToIsabel () {
    console.log("Hello, Isabel!");
}
sayHelloToIsabel();

function sayHelloToSofia() {
    console.log("hello,Sofia!");
}
sayHelloToSofia();

function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
}
sayHelloToBrendan();

function doSomething(thing) {
    console.log(thing);
}
doSomething("junk");// passing the argument 'anything' into our function 


function sayHelloTo(firstName){
    console.log(`Hello, ${firstName}`)
}
sayHelloTo('Isabel');
sayHelloTo('Jane');
sayHelloTo('R2-D2');
sayHelloTo('1');

//A parameter is a placeholder that stores whatever value gets passed in as an argument. For example, when we run the function call sayHelloTo('Isabel'), the value of the argument, 'Isabel', gets stored in the parameter firstName. Then, inside the function body, we access that value by using the parameter name, interpolate it into the string, and log the string to the terminal.

function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}
//say("Goodbye", "Julio");
say("Julio", "hello");
// important point: the parameter names only have meaning to us, the programmer; JavaScript assigns values to parameters based solely on the order of the arguments that are passed.

function add(x, y) {
    return x + y;//When we return inside a function, we're giving that value back to the world outside the function.
}
console.log(add(1,2));
//

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`
}
console.log(say("Hello", "Sofia"));

//return x + y;Setting up your function to "return" a value means that value is available to be used elsewhere in your program.

// If we wanted to both return and log a string in our say() function, we might try writing:

function say(greeting, firstName) {
    console.log('I was called!');
    return `${greeting}, ${firstName}!`;//return ends the execution inside the function.
}
console.log(say("Howdy", "partner"));

//practice
const percentage = 100;

function inPercentage (num1) {
    return percentage * num1;
}
console.log("Hey that was a", inPercentage(2),"% return!");

//-------------------------------------------------------------------------------------------------
//Basic maths function
function add(x,y){
  return x+y;
}
add(1,2);

function divide(x,y){
  return x/y;
}
divide(16,2);

function multiply(x,y){
  return x*y;
}
multiply(4,2);

function subtract(x,y){
  return x-y;
}
subtract(2,1);


//-------------------------------------------------------------------------------------------------
let number = 5;

number++;
number; //return=> 6, the number was incremented after it was evaluated
number--;
number;

--number;//number is evaluated after the operator is executed, but recommends placing operators after the not before like the above.
number;

++number;
number;

//It's best to use the basic arithmetic operators combined with =.
number += 3;
number -= 2;
number *= 10;
number /= 5;

// note: the return value is dependent upon the value above it, takes the return value above and compute to the next.


//---------------------------------------------------------------------------------------------------
//if we have two functions that depend on the same external variable, the order in which they are called matters.

let number = 10;

function add5(){
  return number += 5;
}

function divideBy3 (){
  return number /= 3;
}
divideBy3(); //=> returns 3.3333333333333335
add5(); //=> returns 8.333333333333334

add5(); //=> returns 15
divideBy3(); //=> returns 5;
//Because these methods are more explicit, we prefer += to ++ and -= to -- (usually).


//-------------------------------------------------------------------------------Lab practice-----------------------------------------------------------------------------------
//Define functions add(), subtract(), multiply(), divide()
function add(){
}

function subtract(){
}

function multiply(){
}

function divide(){
}

//use of fundamental math operators +, -, *, / (a,b) to return results
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

//increment(n) increments n and returns the result
function increment(a){
    return a + 1;
}

//decrement(n) decrement n and returns the result
function decrement(a){
    return a - 1;
}


