// --- Setup ---
class User {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.inventory = []; // Startar tom
    }

    // En metod som returnerar namn
    getName() {
        return this.name;
    }

    // En metod som ändrar data
    // Returnerar inget (undefined)
    levelUp() {
        this.level++;
    }

    // En metod som tar en parameter
    addItem(item) {
        this.inventory.push(item);
    }
}

// Skapa två instanser
const user1 = new User("Anna", 10);
const user2 = new User("Erik", 5);

// Återställningsvariabler
let result = null;

//1. "Anna"
//2. 5
//3. 0
//4. "Anna"
//5. "Erik"
//6. undefined
//7. 11
//8. 6
//9. 5
//10. true
//11. true
//12. false
//13. 1
//14. key
//15. 0
//16. 12
//17. object
console.log("17. ", typeof user1);

//18. function
console.log("18.", typeof user1.getName);

/* //19. 50
user1.level = 50;
return user1.level;
console.log("19.", user1.level);
//20. 5
 */
//
class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    getDetails() {
        return `Märke: ${this.brand}, år: ${this.year}`;
    }
}
const volvoCar = new Car("Volvo", 2022);
console.log(volvoCar.getDetails());
