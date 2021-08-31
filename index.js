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
