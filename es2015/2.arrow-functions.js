//1. Single parameter and single statement
var message = name => console.log("Hello, " + name + "!");
message("Sudheer"); // Hello, Sudheer!

//2. Multiple parameters and single statement
var multiply = (x, y) => x * y;
console.log(multiply(2, 3)); // 6


//3. Single parameter and multiple statements
var even = number => {
    if(number % 2) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
even(5); // odd

//4. Multiple parameters and multiple statements
var divide = (x, y) => {
    if(y != 0) {
        return x / y;
    }
}
console.log(divide(100, 5)); // 20

//5. No parameter and single statement
var greet = () => console.log('Hello World!');
greet(); // Hello World!
