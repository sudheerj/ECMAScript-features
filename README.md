# ECMAScript-cheatsheet
ECMAScript is the scripting language which acts as the basis of JavaScript. ECMAScript standardized by the ECMA International standards organization in the ECMA-262 and ECMA-402 specifications.
Each proposal for an ECMAScript feature goes through the following maturity stages:
1. Stage 0: Strawman;
2. Stage 1: Proposal;
3. Stage 2: Draft;
4. Stage 3: Candidate;
5. Stage 4: Finished.


### Table of Contents

| No. | Feature |
| --- | --------- |
|   | **ES2015 Or ES6** (Supported by Chrome(51), FF(54), IE/Edge(14), Safari(10), Opera(38)) |
|1  | [Variable Scoping](#variable-scoping) |
|2  | [Arrow functions](#arrow-functions) |
|3  | [Classes](#classes) |
|4  | [Enhanced object literals](#Enhanced-object-literals) |
|5  | [String interpolation](#string-interpolation) |
|6  | [Destructuring](#destructuring) |
|7  | [Default parameters](#default-parameters) |
|8  | [Rest parameter](#rest-parameter) |
|9  | [Spread Operator](#spread-operator) |
|10 | [Iterators & For..of](#iterators-&-for..of) |
|11 | [Generators](#generators) |
|12 | [Modules](#modules) |
|13 | [Set](#set) |
|14 | [Weakset](#weakset) |
|15 | [Map](#map) |
|16 | [Weakmap](#weakmap) |
|17 | [Unicode](#unicode) |
|18 | [Proxies](#proxies) |
|19 | [Symbols](#symbols) |
|20 | [Promises](#promises) |
|21 | [Reflect](#reflect) |
|22 | [Binary and Octal](#binary-and-octal) |
|   | **ES2016 Or ES7** (Supported by Chrome(68), Opera(55))|
|1  | [Array includes](#array-includes) |
|2  | [Exponentiation Operator](#exponentiation-operator) |
|   | **ES2017 Or ES8** (Supported by Chrome, FF, Opera, Safari)|
|1  | [Async functions](#async-functions) |
|2  | [Object entries](#object-entries) |
|3  | [Object values](#object-values) |
|4  | [Object property descriptors](#object-property-descriptors) |
|5  | [Trailing commas](#trailing-commas) |
|   | **ES2018 Or ES9**|
|1  | [Async iterators](#async-iterators) |
|2  | [Object rest properties](#object-rest-properties) |
|3  | [Object spread properties](#object-spread-properties) |
|4  | [Promise finally](#promise-finally) |
|   | **ES2019 Or ES10**|
|1  | [Array flat and flatMap](#array-flat-and-flatmap) |
|2  | [Object formEntries](#object-formentries) |
|3  | [String trimStart and trimEnd](#string-trimstart-and-trimend) |
|4  | [Promise finally](#promise-finally) |
|5  | [Dynamic import](#dynamic-import)|
|6  | [Symbol description](#symbol-description)|
|7  | [Optional Catch Binding](#optional-catch-binding)|
|8  | [JSON Improvements](#json-improvements)|
|9  | [Private Class Variables](#private-class-variables)|
|   | **ES2020 Or ES11**|
|1  | [BigInt](#bigint) |
|2  | [Dynamic Import](#dynamic-import) |
|3  | [Nullish Coalescing Operator](#nullish-coalescing-operator)|
|4  | [Optional chaining](#optional-chaining)|
|5  | [Promise allSettled](#promise-allsettled)|
|6  | [String matchAll](#string-matchall)|
|7  | [globalThis](#globalthis)|
|8  | [import.meta](#import.meta)|
|9  | [for..in order](#for..in-order)|

## ES2015 Or ES6

1. ### Variable Scoping

The variable scoping determines the visibility or accessibility of a variable within the certain part of the program or region. In ES6, both `const` and `let` keywords allow developers to declare variables in the block scope.
The `let` statement declares a block-scoped local variable

2. ### Arrow functions

The arrow functions provides a more concise syntax for writing function expressions by opting out the function and return keywords using fat arrow(=>) notation. Let's see how this arrow function looks like,
```js
// Function Expression
var multiplyFunc = function(a, b) {
    return a * b;
}
console.log(multiplyFunc(2, 5)); // 10

// Arrow function
var multiplyArrowFunc = (a, b) => a * b;
console.log(multiplyArrowFunc(2, 5)); // 10
```
You can also skip paranthesis(()) if the function has exactly one parameter(either zero or more than one parameter). Apart from this, you can wrap braces({}) if the function has more than one expression in the body.
Let's list down all the variations of arrow functions,
```js
//1. Single parameter and single statement
var message = name => console.log("Hello, " + name + "!");
message("Sudheer"); // Hello, Sudheer!

//2. Multiple parameters and single statement
var multiply = (x, y) => x * y;
console.log(multiply(2, 5)); // 10


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
```
**[⬆ Back to Top](#table-of-contents)**

### Classes
The classes are introduced as syntactic sugar over existing prototype based inheritance and constructor functions. So this feature doesn't bring new object-oriented inheritance model to JavaScript.

### Reflect
Reflection is the ability of a code to inspect and manipulate variables, properties, and methods of objects at runtime. JavaScript already provides Object.keys(), Object.getOwnPropertyDescriptor(), and Array.isArray() methods as classic refection features. In ES6, it has been officially provided through Reflect object. Reflect is a new global object which is used to call methods, construct objects, get and set properties, manipulate and extend properties. It is similar to Math and JSON objects and all the methods of this object are static.

## ES2016 Or ES7

## ES2017 Or ES8

## ES2018 Or ES9

### Private Class Variables
 In ES6, the classes are introduced to create reusable modules and variables are declared in clousure to make them private. Where as in ES2020, private class variables are introduced to allow the variables used in the class only. By just adding a simple hash symbol in front of our variable or function, you can reserve them entirely for internal to the class.
 ```js
 class User {
   #message = "Welcome to ES2020"

   login() { console.log(this.#message) }
 }

 const user = new User()

 user.login() // Welcome to ES2020
 console.log(user.#message) // Uncaught SyntaxError: Private field '#
 ```
 **Note:** As shown in the above code, If you still try to access the variable directly from the object then you will receive syntax error.

## ES2019 Or ES10

ES2020 is the current newer version of ECMAScript corresponding to the year 2020. This is the eleventh edition of the ECMAScript Language Specification. Even though this release doesn't bring as many features as ES6, it included some really useful features.
Most of these features already supported by some browsers and try out with babel parser support for unsupported features. This edition is set for final approval by the ECMA general assembly in June, 2020. The [ECMAScript 2020 (ES2020) language specification](https://tc39.es/ecma262/2020/) is ready now.

### BigInt
In earlier JavaScript version, there is a limitation of using the Number type. i.e, You cannot safely represent integer values(`Number` primitive) larger than pow(2, 53). In ES2020, `BigInt` is introduced as the 7th primitive type to represent whole numbers(integers with arbitrary precision) larger than pow(2, 53) - 1(or 9007199254740991 or Number.MAX_SAFE_INTEGER). This is been created by appending `n` to the end of an integer literal or by calling the function BigInt().
```js
// 1. Current number system
const max = Number.MAX_SAFE_INTEGER;
console.log(max + 1) // 9007199254740992
console.log(max + 2) // 9007199254740992

// 2. BigInt representation
const bigInt = 9007199254740991n;
const bigIntConstructorRep = BigInt(9007199254740991); // 9007199254740991n
const bigIntStringRep = BigInt("9007199254740991"); // 9007199254740991n

// 3. Typeof usage

console.log(typeof 1)// number
console.log(typeof 1n)// bigint
console.log(typeof BigInt('1'))// bigint

// 4. Operators

const previousMaxNum = BigInt(Number.MAX_SAFE_INTEGER);
console.log(previousMaxNum + 2n); //9007199254740993n (this was not possible before)
console.log(previousMaxNum -2n); //9007199254740990n
console.log(previousMaxNum * 2n); //18014398509481982n
console.log(previousMaxNum % 2n); //1n
console.log(previousMaxNum / 2n); // 4503599627370495n

// 5. comparison
console.log(1n === 1); // false
console.log(1n === BigInt(1)); // true
console.log(1n == 1); // true
```

### Dynamic Import
Static imports supports some of the important use cases such as static analysis, bundling tools, and tree shaking, it is also it's desirable to be able to dynamically load parts of a JavaScript application at runtime. The new feature `dynamic import` is introduced to load a module conditionally or on demand. Since it returns a promise for the module namespace object of the requested module, the module can be resolved or import can now be assigned to a variable using async/await as below
```js
<script>
const moduleSpecifier = './message.js';
import(moduleSpecifier)
    .then((module) => {
        module.default(); // Hello, default export
        module.sayGoodBye(); //Bye, named export
    })
    .catch( err => console.log('loading error'));
</script>
```
```js
<script>
(async function() {
    const moduleSpecifier = './message.js';
    const messageModule = await import(moduleSpecifier);
    messageModule.default(); // Hello, default export
    messageModule.sayGoodBye(); //Bye, named export
})();
</script>
```
and the imported module appears with both default and named exports
```js
export default () => {
   return "Hello, default export";
}
export const sayGoodBye = () => {
   return "Bye, named export"
}
```

**Note:** Dynamic import does not require scripts of `type="module"`

### Nullish Coalescing Operator
The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand. This operator replaces `||` operator to provide default values if you treat empty value or '', 0 and NaN as valid values. This is because the logical OR(||) operator treats(empty value or '', 0 and NaN) as falsy values and returns the right operand value which is wrong in this case. Hence, this operator truely checks for `nullish` values instead `falsy` values.
```js
let employee = {
  profile: {
    name: "",
    age: 0
  }
};

console.log(employee.profile.name || "Unknown"); // Unknown
console.log(employee.profile.age || 30); // 30

console.log(employee.profile.name ?? "Unknown"); // ""(empty is valid case for name)
console.log(employee.profile.age ?? 30); // 0(zero is valid case for name)
```
In a short note, nullish operator returns a non-nullish value and || operator returns truthy values.
### String matchAll
There is `String#match` method to get all the matches of a string against a regular expression by iterating for each match. However this method gives you the substrings that match.
The `String#matchAll()` is a new method added to String prototype, which returns an iterator of all results matching a string against a regular expression.
```js
const regex = /t(e)(st(\d?))/g;
const string = 'test1test2';
const matchesIterator = string.matchAll(regex);
Array.from(matchesIterator, result => console.log(result));
```
When you this code in browser console, the matches iterator produces an array for each match including the capturing groups with a few extras.
```cmd
["test1", "e", "st1", "1", index: 0, input: "test1test2", groups: undefined]
["test2", "e", "st2", "2", index: 5, input: "test1test2", groups: undefined]
```
### Optional chaining
In JavaScript, Long chains of property accesses is quite error-prone if any of them evaluates to `null` or `undefined` value. Also, it is not a good idea to check property existence on each item which in turn leads to a deeply-nested structured `if` statements. Optional chaining is a new feature that can make your JavaScript code look cleaner and robust by appending(?.) operator to stop the evaluation and return undefined if the item is undefined or null.
By the way, this operator can be used together with nullish coalescing operator to provide default values
```js
let employee = {
};

let employee1 = {
     profile: {
        name: 'John',
        age: 30
     }
};


console.log(employee.profile?.name); // Undefined
console.log(employee.profile?.age); // Undefined

console.log(employee1.profile?.name); // John
console.log(employee1.profile?.age); // 30

console.log(employee.profile?.name ?? "Unknown"); // Unknown
console.log(employee.profile?.age ?? 30); // 30
```
### Promise.allSettled
It is really helpful to log(especially to debug errors) about each promise when you are handling multiple promises. The  `Promise.allSettled()` method returns a new promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects describing the outcome of each promise.
```js
const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve(100), 1000));

const promise2 = new Promise((resolve, reject) => setTimeout(reject, 1000));

Promise.allSettled([promise1, promise2]).then(data => console.log(data)); // [
                                                                             Object { status: "fulfilled", value: 100},
                                                                             Object { status: "rejected", reason: undefined}
                                                                             ]
```
As per the output, each outcome object returns `status` field which denotes either "fulfilled"(value present) or "rejected"(reason present)

### globalThis
Prior to ES2020, you need to write different syntax in different JavaScript environments(cross-platforms) just to access the global object. It is really a hard time for developers because you need to use `window, self, or frames` on the browser side, `global` on the nodejs, `self` on the web workers side. On the other hand, `this` keyword can be used inside functions for non-strict mode but it gives undefined in strict mode. If you think about `Function('return this')()` as a solution for above environments, it will fail for CSP enabled environments(where eval() is disabled).
In the older versions, you can use es6-shim as below
```js
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};

var globals = getGlobal();

if (typeof globals.setTimeout !== 'function') {
  console.log('no setTimeout in this environment or runtime');
}
```
In ES2020, `globalThis` property is introduced to provide a standard way of accessing the global this value across environments.
```js
if (typeof globalThis.setTimeout !== 'function') {
  console.log('no setTimeout in this environment or runtime');
}
```

### import.meta
The import.meta object was created by the ECMAScript implementation with a null prototype to get context-specific metadata about a JavaScript module.
Let's say you are trying to load `my-module` from a script,
```js
<script type="module" src="my-module.js"></script>
```
Now you can access meta information(base URL of the module) about the module using the import.meta object
```js
console.log(import.meta); // { url: "file:///home/user/my-module.js" }
```
The above URL can be either URL from which the script was obtained (for external scripts), or the document base URL of the containing document (for inline scripts).
**Note:** Remember `import` is not really an object but `import.meta` is provided as an object which is extensible, and its properties are writable, configurable, and enumerable.

### for..in order
Prior to ES2020, the specifications did not specify in which order for (a in b)  should run. Even though most of the javascript engines/browsers loop over the properties of an object in the order in which they were defined, it is not the case with all scenarios. This has been officially standardized in ES2020.
```js
var object = {
  'a': 2,
  'b': 3,
  'c': 4
}


for(let key in object) {
  console.log(key); // a b c
}
```



