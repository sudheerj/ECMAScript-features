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

