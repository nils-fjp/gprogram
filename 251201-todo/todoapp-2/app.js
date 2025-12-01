const todoForm = document.querySelector(".formStyle");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const clearBtn = document.querySelector("#clear-button");

/* console.log(clearBtn);
console.log(todoList);
console.log(todoInput);
console.log(todoForm); */

const addTodo = (input) => {
    const li = document.createElement("li"); // skapar en li-tagg
    const spanEl = document.createElement("span"); // skapar en span-tagg
    const checkboxEl = document.createElement("input"); // skapar en input-tagg
    const deleteBtn = document.createElement("button"); // skapar en knapp för att ta bort todo

    spanEl.textContent = input; // lägger till texten från input-fältet i li-taggen
    checkboxEl.type = "checkbox"; // sätter typen på input-tagen till checkbox
    deleteBtn.textContent = "x"; // lägger till text på knappen

    li.appendChild(checkboxEl); // lägger till checkboxen i li-taggen
    li.appendChild(spanEl); // lägger till span-taggen i li-taggen
    li.appendChild(deleteBtn); // lägger till knappen i li-taggen

    todoList.appendChild(li); // lägger till li-taggen i ul-taggen

    // logik för att ta bort en att-göra
    deleteBtn.addEventListener("change", () => {
        if (checkboxEl.checked) {
            li.style.textDecoration = "line-through"; // sätter en linje genom texten
        } else {
            li.style.textDecoration = "none"; // tar bort linjen genom texten
        }
        li.remove(); // tar bort li-taggen från ul-taggen
    });
};

// logik till att skapa en att-göra lista och lägga listan i ul-taggen
// ali brukar kalla den e för event, men går att ha vilket namn som helst
todoForm.addEventListener("submit", (event) => {
    event.preventDefault(); // förhindrar att sidan laddas om
    const input = todoInput.value; // hämtar värdet från input-fältet

    if (!input.trim()) {
        todoForm.reset(); // rensa fältet
        return; // om inget är skrivet i fältet, avbryt allt.
        // tom sträng eller en massa spaces
    }
    /* 
    console.log("test efter return");
 */
    /*     const li = document.createElement("li"); // skapar en li-tagg
    li.textContent = input; // lägger till texten från input-fältet i li-taggen

    console.log(input); // skriver ut värdet i konsolen

    todoList.appendChild(li); // lägger till li-taggen i ul-taggen */

    addTodo(input); /*  anropar funktionen för att lägga till en todo 
                            istället för att skriva koden här varje gång */

    todoForm.reset(); // rensa input-fältet
});

// logik för att rensa hela listan
clearBtn.addEventListener("click", () => {
    todoList.innerHTML = ""; // tömmer innehållet i ul-taggen
});
