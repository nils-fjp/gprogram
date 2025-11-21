if (true) {
    let var1 = "I'm inside an if block (let)";
    const var2 = "Me too! (const)";
    var var3 = "I'm global! (var)";
}

console.log("var1:", var1); // ReferenceError
console.log("var2:", var2); // ReferenceError
console.log("var3:", var3); // "I'm global!"
