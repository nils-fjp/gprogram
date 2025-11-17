//loquacious-parfait

// --- Setup (Nytt tema: Skola) ---
class Student {
    constructor(name, major) {
        this.name = name;
        this.major = major;
        this.courses = [];
    }

    // Metod som läser 'this'
    getMajor() {
        return this.major;
    }

    // Metod som ändrar 'this'
    addCourse(courseName) {
        this.courses.push(courseName);
        // Returnerar inget
    }
}

// Skapa instanser
const student1 = new Student("Anna", "IT");
const student2 = new Student("Björn", "Ekonomi");

// En array av instanser
const allStudents = [student1, student2];

// Ett vanligt objekt (inte en klass)
const school = {
    name: "Dataskolan",
    staff: ["Erik", "Stina"],

    getName() {
        // 'this' pekar på 'school'
        return this.name;
    },

    getNameArrow: () => {
        // FÄLLA: 'this' pekar INTE på 'school'
        return this.name;
    },
};

// Återställningsvariabler
let result = null;
let count = 0;

//1. "Anna"
student1.name;
console.log("1.", student1.name);
//2. "Ekonomi"
student2.major;
console.log("2.", student2.major);
//3. 0
student1.courses.length;
console.log("3.", student1.courses.length);
//4. "IT"
student1.getMajor();
console.log("4.", student1.getMajor());
//5. "Ekonomi"
student2.getMajor();
console.log("5.", student2.getMajor());
//6. "Dataskolan"
school.getName();
console.log("6.", school.getName());
//7. ~~undefined~~ ~~"Error"~~ (<empty string>)
school.getNameArrow();
console.log("7.", school.getNameArrow());
//8. "Error"
const fn = student1.getMajor;
try {
    result = fn();
} catch (e) {
    result = "Error";
}
console.log("8.", result);
result = null;
//9. ~~undefined~~ "Error"
/*
const fn = school.getName;
try {
    result = fn();
} catch (e) {
    result = "Error";
}
console.log("9.", result);
result = null; 
*/
//10. ~~null~~ *undefined*
student1.addCourse("JS1"); //preserve for next
console.log("10.", result);
result = null;
//11. "JS1"
student1.courses[0]; //after 10.
console.log("11.", student1.courses[0]);
result = null;
//12. 1
student1.courses.length; //after 10.
console.log("12.", student1.courses.length);
//13. 0
student2.courses.length; //unaffected by 10.
console.log("13.", student2.courses.length);
//14. "Erik"
school.staff[0];
console.log("14.", school.staff[0]);
//15. "Björn"
allStudents[1].name;
console.log("15.", allStudents[1].name);
//16. "IT"
allStudents[0].getMajor();
console.log("16.", allStudents[0].getMajor());
//17. "Annabell"
allStudents[0].name = "Annabell";
student1.name;
console.log("17.", student1.name);
//18. ~~"nullAB"~~ "AB"
for (const student of allStudents) {
    result += student.name[0];
}
console.log("18.", result);
result = null;
//19. 1
for (const student of allStudents) {
    if (student.major === "IT") {
        count++;
    }
}
console.log("19.", count);
count = 0;
//20. ~~"nullIT Ekonomi "~~ "IT Ekonomi "
allStudents.forEach((s) => {
    result += s.getMajor() + " ";
});
console.log("20.", result);
result = null;
//part2
class Bil {
    constructor(marke, farg) {
        this.marke = marke;
        this.farg = farg;
        this.speed = 0;
    }
    gas() {
        this.speed += 10;
    }
    ge;
    tSpeed() {
        return this.speed;
    }
}

//
result = null;
count = 0;

const alisfunction = student1.getMajor;
try {
    result = fn();
} catch (e) {
    result = "Error";
}
console.log("8.", result);

const alisfunctionbind = student1.getMajor.bind(student1);
/* 
bind: binda `this` som finns i lgoiken som kommer in där.
bind säger att, när jag anropar denna i framtiden, låt this vara student1
men här har man inte anropat funktionen än
*/

const alisfunctioncall = student1.getMajor;
try {
    result = alisfunction(); // eller alisfunction.call() anropar funktionen
} catch (e) {
    result = "Error";
}
console.log("8.", result);
