//-------Data Types (different values that we work with) ------ 

// Strings
"string of characters"

// Numbers
2345   

// Booleans (can only be true or false)
true
false

// Undefined (defualt value of unassigned variables)
undefined

//Arrays (list of items) 
let array = [ "abcd" , 123 , ["xyz"] , {name: "Alice"}]

//Objects (contains a key and value (key : value))
let object = { name: "Alice" , age:25 }




//---- Variables ------ (stores a value from strings to objects)

// declearing a variable
let num1; //defualts to undefined
// assigning a variable
num1 = 1
// declaring & assignment 1 line
let num2 = 2



// ----If Statements---- 
// runs code within if statment if condition is true

// condition uses a comparison below
// == / ===   a > b    a < b   a >= b   a <= b

// if condition in parenthesis is true -> run the code
if(10 === 10) {
    console.log("hi")
}else{
    console.log("bye")
}



//---Functions-----
// reuse code instead of having it rewrite it over and over again


// declare function , add a name ,
//  () <-inside here are parameters , 
// {    console.log(greeting) }  <- we run whatevers in that code
function logsGreeting () {
    console.log("hi")
    console.log("hi")
    console.log("hi")
}

// execution -> runs everything inside logsGreeting
logsGreeting()


// Using Function Parameters example -- 

// check function execution first
// number 1 = 10 , number 2 = 7
// these are just variables that store whats passed in the execution

function add (number1 , number2) {

    console.log(number1 + number2) //logs total (10 + 7 = 17)
}

// executing function (runs everthing in add) 
// sets 10 as the first param (number 1) , sets 7 as the second parameter (number2)
add(10, 7)



// Using functions exercise

// Task:
// take a numbers
// display the square of it
// ex:  5 -> 5 * 5 -> 25


let number = 5;

function square (number) {
    console.log(number * number)
}

// execute and pass number variable which has a value of 5
square(number)

// can reuse the function for any number we want
square(9)
square(19)
