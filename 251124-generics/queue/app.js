// @ts-check
/**
 * @template T
 */
class Queue {
    constructor() {
        /**
         * @type {T[]}
         */
        this.items = [];
    }
    /**
     * @param {string|number} item
     */
    add(item) {
        this.items.push(item);
    }
    /**
     * @returns {T}
     */
    remove() {
        this.items.shift();
        return this.items[0];
    }
}

/** @type {Queue<string>} */
const namn = new Queue();
namn.add("Anna");
console.log("namn:", namn.items);
namn.add("Bertil");
console.log("namn:", namn.items);
namn.remove();
console.log("namn:", namn.items);

/** @type {Queue<number>} */
const biljettnummer = new Queue();
biljettnummer.add(101);
biljettnummer.add(102);
console.log("biljettnummer:", biljettnummer.items);
biljettnummer.remove();
console.log("biljettnummer:", biljettnummer.items);
