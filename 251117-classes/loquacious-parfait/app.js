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

//1.
student1.name;
//2.
student2.major;
//3.
student1.courses.length;
//4.
student1.getMajor();
//5.
student2.getMajor();
//6.
school.getName();
//7.
school.getNameArrow();
//8.
/* const fn = student1.getMajor;
try {
    result = fn();
} catch (e) {
    result = "Error";
} */
result = null;
//9.
const fn = school.getName;
try {
    result = fn();
} catch (e) {
    result = "Error";
}
result = null;
//10.
student1.addCourse("JS1"); //preserve for next
//11.
student1.courses[0]; //after 10.
//12.
student1.courses.length; //after 10.
//13.
student2.courses.length; //unaffected by 10.
//14.
school.staff[0];
//15.
allStudents[1].name;
//16.
allStudents[0].getMajor();
//17.
allStudents[0].name = "Annabell";
student1.name;
//18.
for (const student of allStudents) {
    result += student.name[0];
}
result;
result = null;
//19.
for (const student of allStudents) {
    if (student.major === "IT") {
        count++;
    }
}
count;
count = 0;
//20.
allStudents.forEach((s) => {
    result += s.getMajor() + " ";
});
result;
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
    getSpeed() {
        return this.speed;
    }
}
