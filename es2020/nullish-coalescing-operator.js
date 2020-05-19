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