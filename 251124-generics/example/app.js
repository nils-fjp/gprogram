const arr = ["apple", "banana", "cherry"];
console.log("arr:" + arr);
console.log("arr.length:" + arr.length);
console.log("arr.length - 1:" + (arr.length - 1));

//

/**
 * @param {string[]} text
 */

/**
 * @template T
 * @param {T[]} items - en array av typen T
 * @returns {T} - returnerar ett objekt av samma typ T
 */

function getFirst(items) {
    return items[0];
}
function storabokstäver() {
    return Text.toUpperCase();
}

const items = [1, 2, 3];
const value = getFirst(items);
storabokstäver(value);
console.log("value:", value);
