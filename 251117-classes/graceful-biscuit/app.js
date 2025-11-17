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
//17.
