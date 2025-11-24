/* if (true) {
    let var1 = "I'm inside an if block (let)";
    const var2 = "Me too! (const)";
    var var3 = "I'm global! (var)";
}

console.log("var1:", var1); // ReferenceError
console.log("var2:", var2); // ReferenceError
console.log("var3:", var3); // "I'm global!"

function arr() {}
 */
/* class Test {
    constructor() {
        this.var0 = 5;
    }
    f1() {
        return this;
    }

    f2: () => {
        return this;
    };
}
const a = new Test();
console.log(a);
console.log("f1:", a.f1());
console.log("f2:", a.f2());
 */

/* if (true) {
    let var1 = "I'm inside an if block (let)";
    const var2 = "Me too! (const)";
    var var3 = "I'm global! (var)";
}

console.log("var1:", var1); // ReferenceError
console.log("var2:", var2); // ReferenceError
console.log("var3:", var3); // "I'm global!"

function arr() {}
 */
const a = {
    /* constructor() {
        this.var0 = 5;
    } */
    f1: function () {
        // vanlig funktion
        function inner() {
            const arrow = () => {
                console.log("level 3", this);
            };
            arrow();
            console.log("level 2", this);
        }
        inner();
        console.log("level 1", this);
    },
    f2: () => {
        // arrow function
        return this;
    },
};
console.log("f1:", a.f1());
console.log("f2:", a.f2());
