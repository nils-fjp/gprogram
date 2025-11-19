// 251117-
// --- Setup (Ny: Klasser & Objekt) ---
class Player {
    // Körs när 'new Player(...)' anropas
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Vanlig metod (this = instansen)
    levelUp() {
        this.level++;
        return this.level;
    }

    // Pilfunktion (this = låst till instansen)
    getNameArrow = () => {
        return this.name;
    };
}

// Skapa instanser av klassen
const p1 = new Player("Kira", 10);
const p2 = new Player("Rax", 20);

// Ett vanligt objekt med metoder
const server = {
    id: 1,
    name: "Server_A",

    // Vanlig metod (this = server)
    getStatus() {
        return `Server ${this.id} is OK`;
    },

    // Pilfunktion (this = global/undefined)
    getStatusArrow: () => {
        return `Server ${this.id} is OK`;
    },
};

// Globala funktioner
function getGlobalName() {
    // this = global/undefined
    return this.name;
}

const getArrowName = () => {
    // this = global/undefined
    return this.name;
};

// 1. "Kira"
// 2. 20
// 3. 11
// 4. "Rax"
// 5. "Server 1 is OK"
// 6. "Server undefined is OK"
// 7. undefined
// 8. undefined
// 9. "Error"
// 10. "Kira"

// 11. "Kira"
console.log("11.", getGlobalName.call(p1));

// 12. "Server undefined is OK"
console.log("12.", server.getStatus.call(p2));
// 13. 21

// 14. "Server undefined is OK"
console.log("14", server.getStatusArrow.call(p1));
// 15. 12
// 16. true
// 17. false (efts saknas i instansen)
// 18. true (efts pilfunktion)
// 19. "Zane"
// 20. "Server 99 is OK"
console.log("20.", server.getStatus.call({ id: 99 }));
// 21.

class Inventory {
    constructor(items) {
        this.items = [];
    }
}
