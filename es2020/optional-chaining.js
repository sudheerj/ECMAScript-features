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