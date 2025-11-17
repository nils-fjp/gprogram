// --- Setup (Nytt tema: Böcker) ---
class Book {
    constructor(titel, forfattare, sidor) {
        this.titel = titel;
        this.forfattare = forfattare;
        this.sidor = sidor;
        this.nuvarandeSida = 0;
        this.bokmarken = [];
    }

    // Metod som returnerar en sträng
    getSammanfattning() {
        return `${this.titel} av ${this.forfattare}`;
    }

    // Metod som ändrar 'this'
    lasSida() {
        this.nuvarandeSida++;
        // Returnerar inget (undefined)
    }

    // Metod som tar parameter
    laggTillBokmarke(sidaNummer) {
        this.bokmarken.push(sidaNummer);
    }

    // Metod som returnerar boolean
    arFardig() {
        return this.nuvarandeSida === this.sidor;
    }
}

// Skapa två instanser
const book1 = new Book("Hobbiten", "J.R.R. Tolkien", 300);
const book2 = new Book("1984", "George Orwell", 328);

// Återställningsvariabler
let result = null;

//1. ?"Hobbiten"
//2. ?"George Orwell"
//3. ?0
//4. ?0
//5. ?"Hobbiten av J.R.R. Tolkien"
//6. ?"1984 av George Orwell"
//7. ?undefined
//8. ?1
//9. ?1
//10. 0 (min gissning var undefined)
//11. ?50
//12. ?1
//13. ?0
//14. ?false
//15. ?true
//16. ?false
//17. ?object
//18. ?function
//19. "Sagan om Ringen"
//20. "1984"

//Del2
class Produkt {
    constructor(namn, pris) {
        this.namn = namn;
        this.pris = pris;
    }
    getPrisInkMoms(momsSats) {
        return this.pris * momsSats;
    }
}
const laptop = new Produkt("Surface Laptop 7", 10000);
console.log(laptop.getPrisInkMoms(1.25));
