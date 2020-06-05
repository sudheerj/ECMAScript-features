# JavaScript Interview Questions & Answers

> Click :star:if you like the project. Pull Request are highly appreciated. Follow me [@SudheerJonna](https://twitter.com/SudheerJonna) for technical updates.

## Downloading PDF/Epub formats

You can download the PDF and Epub version of this repository from the latest run on the [actions tab](https://github.com/sudheerj/ECMAScript-cheatsheet/actions).

## How to run examples
```cmd
npm install
npx babel-node es2020/bigint // Try other examples too
```

# ECMAScript-cheatsheet

**ECMAScript** is the scripting language which acts as the basis of JavaScript. ECMAScript standardized by the ECMA International standards organization in the ECMA-262 and ECMA-402 specifications.
Each proposal for an ECMAScript feature goes through the following maturity stages:
1. Stage 0: Strawman;
2. Stage 1: Proposal;
3. Stage 2: Draft;
4. Stage 3: Candidate;
5. Stage 4: Finished.


### Table of Contents

| No. | Feature |
| --- | --------- |
|   | **ES2015 Or ES6** |
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
|   | **ES2016 Or ES7** |
|1  | [Array includes](#array-includes) |
|2  | [Exponentiation Operator](#exponentiation-operator) |
|   | **ES2017 Or ES8** |
|1  | [Async functions](#async-functions) |
|2  | [Object values](#object-values) |
|3  | [Object entries](#object-entries) |
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
|4  | [Symbol description](#symbol-description)|
|5  | [Optional Catch Binding](#optional-catch-binding)|
|6  | [JSON Improvements](#json-improvements)|
|7  | [Private Class Variables](#private-class-variables)|
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
You can also skip parenthesis(()) if the function has exactly one parameter(either zero or more than one parameter). Apart from this, you can wrap braces({}) if the function has more than one expression in the body.

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

   ES2015/ES6 introduced a huge set of new features. But ECMAScript 2016 Or ES7 introduced only two new features:

   1. Array.prototype.includes()
   2. Exponentiation operator

### Array Includes
   Prior to ES7, you have to use `indexOf` method and compare the result with '-1' to check whether an array element contains particular element or not.
   ```js
    const array = [1,2,3,4,5,6];
    if(array.indexOf(5) > -1 ){
    console.log("Found an element");
    }
   ```
   Whereas in ES7, `array.prototype.includes()` method is introduced as a direct approach to determine whether an array includes a certain value among its entries or not.
   ```js
   const array = [1,2,3,4,5,6];
   if(array.includes(5)){
   console.log("Found an element");
   }
   ```
  In addition to this, `Array.prototype.includes()` handles NaN and Undefined values better than `Array.prototype.indexOf()` methods. i.e, If the array contains NaN and Undefined values then `indexOf()` does not return correct index while searching for NaN and Undefined.
  ```js
  let numbers = [1, 2, 3, 4, NaN, ,];
  console.log(numbers.indexOf(NaN)); // -1
  console.log(numbers.indexOf(undefined)); // -1
  ```
  On the otherhand, `includes` method is able to find these elements
  ```js
    let numbers = [1, 2, 3, 4, NaN, ,];
    console.log(numbers.includes(NaN)); // true
    console.log(numbers.includes(undefined)); // true
  ```
### Exponentiation Operator
   The older versions of javascript uses `Math.pow` function to find the exponentiation of given numbers. ECMAScript 2016 introduced the exponentiation operator, **(similar to other languages such as Python or F#) to calculate the power computation in a clear representation using infix notation.
   ```js
   //Prior ES7
   const cube = x => Math.pow(x, 3);
   console.log(cube(3)); // 27

   //Using ES7
   const cube1 = x => x ** 3;
   console.log(cube1(3)); // 27
   ```

## ES2017 Or ES8

### Async functions

### Object values
   Similar to Object.keys which iterate over JavaScript object’s keys, Object.values will do the same thing on values. i.e, The Object.values() method is introduced to returns an array of a given object's own enumerable property values in the same order as `for...in` loop.

   ```js
    const countries = {
      IN: 'India',
      SG: 'Singapore',
    }
    Object.values(countries) // ['India', 'Singapore']
   ```

   By the way, non-object argument will be coerced to an object

   ```js
    console.log(Object.values(['India', 'Singapore'])); // ['India', 'Singapore']
    console.log(Object.values('India')); // ['I', 'n', 'd', 'i', 'a']
   ```

### Object entries
   The `Object.entries()` method is introduced to returns an array of a given object's own enumerable string-keyed property [key, value] pairsin the same order as `for...in` loop.
   ```js
       const countries = {
         IN: 'India',
         SG: 'Singapore',
       }
       Object.entries(countries) // [["IN", "India"], ["SG", "Singapore"]]
   ```
   By the way, non-object argument will be coerced to an object
   ```js
      const countries = ['India', 'Singapore'];
      console.log(Object.entries(countries)); // [ ['0', 'India'], ['1', 'Singapore']]

      const country = 'India';
      console.log(Object.entries(country)); // [["0", "I"], ["1", "n"], ["2", "d"], ["3", "i"], ["4", "a"]]

      console.log(Object.entries(100)); // [], an empty array for any primitive type because it won't have any own properties
   ```
### Object property descriptors
   Property descriptors describe the attributes of a property. The `Object.getOwnPropertyDescriptors()` method returns all own property descriptors of a given object.

   It provides the below attributes,

   1. **value:** The value associated with the property (data descriptors only).
   2. **writable:** true if and only if the value associated with the property may be changed
   3. **get:** A function which serves as a getter for the property.
   4. **set:** A function which serves as a setter for the property.
   5. **configurable:** true if and only if the type of this property descriptor may be changed or deleted.
   6. **enumerable:** true if and only if this property shows up during enumeration of the property.

   The usage of finding property descriptors for any property seems to be as below,

   ```js
    const profile = {
      age: 42
    };

    const descriptors = Object.getOwnPropertyDescriptors(profile);
    console.log(descriptors); //  {age: {configurable: true, enumerable: true, writable: true }}
   ```
### Trailing commas
   Trailing commas are  allowed in parameter definitions and function calls
   ```js
   function func(a,b,) { // declaration
     console.log(a, b);
   }
   func(1,2,); // invocation
   ```
   But if the function parameter definition or function call only contains a comma, a syntax error will be thrown
   ```js
   function func(,) {  // SyntaxError: missing formal parameter
     console.log('no args');
   };
   func(,); // SyntaxError: expected expression, got ','
   ```

   **Note:** Trailing commas are not allowed in Rest Parameters and JSON.

## ES2018 Or ES9

### Array flat and flatMap

   The `flat()` method is used to 'flattens' the nested arrays into the top-level array. The functionality of this method is similar to Lodash's `_.flattenDepth()` function.

   ```js
        const arr = [[1, 2], [[3], 4], [5, 6];
        const flattenedArr = arr.flat(2);

        console.log(flattenedArr);    // => ["1", "2", "3", "4", "5", "6"]
   ```

### Object formEntries
   In JavaScript, it is very commonn to transforming data from one format. ES2017 introduced `Object.entries()` method to objects into arrays.

   **Object to Array:**

   ```js
        const obj = {'a': '1', 'b': '2', 'c': '3' };
        const arr = Object.entries(obj);
        console.log(obj); // [ ['a', '1'], ['b', '2'], ['c', '3'] ]
   ```
   But if you want to get the object back from an array then you need iterate and convert it as below,
    ```js
    const arr = [ ['a', '1'], ['b', '2'], ['c', '3'] ];
    let obj = {}
    for (let [key, val] of arr) {
        obj[key] = val;
    }
    console.log(obj);
    ```
  We need a straightforward way to avoid this iteration. In ES2019, `Object.fromEntries()` method is introduced which performs the reverse of `Object.entries()` behavior. The above loop can be avoided easily as below,
  **Iterable( e.g Array or Map) to Object**
   ```js
    const arr = [ ['a', '1'], ['b', '2'], ['c', '3'] ];
    const obj = Object.fromEntries(arr);
    console.log(obj); // { a: "1", b: "2", c: "3" }
   ```
  One of the common case of this method usage is working with query params of an URL,
   ```js
    const paramsString = 'param1=foo&param2=baz';
    const searchParams = new URLSearchParams(paramsString);

    Object.fromEntries(searchParams);    // => {param1: "foo", param2: "baz"}
   ```

### String trimStart and trimEnd
   In order to make consistency with padStart/padEnd, ES2019 provided the standard functions named as `trimStart` and `trimEnd` to trim white spaces on the beginning and ending of a string. However for web compatilibity(avoid any breakage) `trimLeft` and `trimRight` will be an alias for `trimStart` and `trimEnd` respectively.

   Let's see the usage with an example,
   ```js
    //Prior ES2019
    let messageOne = "   Hello World!!    ";
    console.log(messageOne.trimLeft()); //Hello World!!
    console.log(messageOne.trimRight()); //   Hello World!!

    //With ES2019
    let messageTwo = "   Hello World!!    ";
    console.log(messageTwo.trimStart()); //Hello World!!
    console.log(messageTwo.trimEnd()); //   Hello World!!
   ```

### Promise finally

### Dynamic import

### Symbol description

### Optional catch binding
   Prior to ES9, if you don't need `error` variable and omit the same variable then catch() clause won't be invoked. Also, the linters complain about unused variables. Inorder to avoid this problem, the optional catch binding feature is introduced to make the binding parameter optional in the catch clause. If you want to completely ignore the error or you already know the error but you just want to react to that the this feature is going to be useful.

   Let's see the below syntax difference between the versions,
   ```js
    // With binding parameter(<ES9)
    try {
        ···
    } catch (error) {
        ···
    }
    // Without binding parameter(ES9)
    try {
        ···
    } catch {
        ···
    }
   ```
   For example, the feature detection on a browser is one of the most common case
   ```js
    let isTheFeatureImplemented = false;
    try {
      if(isFeatureSupported()) {
       isTheFeatureImplemented = true;
       }
    } catch (unused) {}
   ```
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
In earlier JavaScript version, there is a limitation of using the Number type. i.e, You cannot safely represent integer values(`Number` primitive) larger than pow(2, 53). In ES2020,

`BigInt` is introduced as the 7th primitive type to represent whole numbers(integers with arbitrary precision) larger than pow(2, 53) - 1(or 9007199254740991 or Number.MAX_SAFE_INTEGER). This is been created by appending `n` to the end of an integer literal or by calling the function BigInt().

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
Static imports supports some of the important use cases such as static analysis, bundling tools, and tree shaking, it is also it's desirable to be able to dynamically load parts of a JavaScript application at runtime.

The new feature `dynamic import` is introduced to load a module conditionally or on demand. Since it returns a promise for the module namespace object of the requested module, the module can be resolved or import can now be assigned to a variable using async/await as below
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
let vehicle = {
    car: {
        name: "",
        speed: 0
    }
};

console.log(vehicle.car.name || "Unknown"); // Unknown
console.log(vehicle.car.speed || 90); // 90

console.log(vehicle.car.name ?? "Unknown"); // ""(empty is valid case for name)
console.log(vehicle.car.speed ?? 90); // 0(zero is valid case for speed)
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
In JavaScript, Long chains of property accesses is quite error-prone if any of them evaluates to `null` or `undefined` value. Also, it is not a good idea to check property existence on each item which in turn leads to a deeply-nested structured `if` statements.

Optional chaining is a new feature that can make your JavaScript code look cleaner and robust by appending(?.) operator to stop the evaluation and return undefined if the item is undefined or null.
By the way, this operator can be used together with nullish coalescing operator to provide default values
```js
let vehicle = {
};

let vehicle1 = {
    car: {
        name: 'ABC',
        speed: 90
    }
};

console.log(vehicle.car?.name); // TypeError: Cannot read property 'name' of undefined

console.log(vehicle.car?.name); // Undefined
console.log(vehicle.car?.speed); // Undefined

console.log(vehicle1.car?.name); // ABC
console.log(vehicle1.car?.speed); // 90

console.log(vehicle.car?.name ?? "Unknown"); // Unknown
console.log(vehicle.car?.speed ?? 90); // 90
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
Prior to ES2020, you need to write different syntax in different JavaScript environments(cross-platforms) just to access the global object. It is really a hard time for developers because you need to use `window, self, or frames` on the browser side, `global` on the nodejs, `self` on the web workers side.

On the other hand, `this` keyword can be used inside functions for non-strict mode but it gives undefined in strict mode. If you think about `Function('return this')()` as a solution for above environments, it will fail for CSP enabled environments(where eval() is disabled).

In the older versions, you can use es6-shim as below,
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
The `import.meta` object was created by the ECMAScript implementation with a null prototype to get context-specific metadata about a JavaScript module.
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



