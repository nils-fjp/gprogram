// hämta alla html-taggen som vi kommer att behöva och lägg dem i variabler
const todoForm = document.querySelector('.formStyle')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')
const clearBtn = document.querySelector('#clear')

// logik till att skapa en todo-lista och lägga listan i ul-taggen
// varje anrop av denna funktion lägger till en enda todo i todo-listan.
const addTodo = input => {
	// börja den här funktionen med att skapa alla HTML elementen som jag kommer att behöva
	const li = document.createElement('li')
	const span = document.createElement('span')
	const checkbox = document.createElement('input')
	const deleteBtn = document.createElement('button')
	const div = document.createElement('div')

	// lägg mitt input i span-taggen och ge span-taggen en class namn för att styla den sen
	span.textContent = input
	span.classList = 'todo-text'

	// ge checkbox-input taggen typen checkbox och en class namn för att styla den sen
	checkbox.type = 'checkbox'
	checkbox.classList = 'custom-checkbox'

	// lägg texten 'X' i delete knappen, hade kunnat lägga 'ta bort' eller 'delete todo'
	// ge knappen en class namn för att styla den sen
	deleteBtn.textContent = 'x'
	deleteBtn.classList = 'delete-button'

	// lägg checkbox-taggen och span-taggen som children till div:n
	div.appendChild(checkbox)
	div.appendChild(span)

	// lägg div-taggen och delete-knappen som children i li-taggen
	li.appendChild(div)
	li.appendChild(deleteBtn)

	// lägg nu li-taggen som innehåller alla delarna i ul-taggen
	todoList.appendChild(li)
}

// Lyssna efter "submit" eventet som finns på formuläret
todoForm.addEventListener('submit', event => {
	// förhindra det vanliga som sker under en submit i ett formulär, vilket är att skicka input + refrecha sidan
	// jag vill förhindra detta eftersom jag nu vill skriva egen logik som ska hända när någon submittar
	event.preventDefault()

	// hämta inputets värde och lägg den i en egen variabel
	const input = todoInput.value

	// om inputet bara har massa spaces så vill jag avbryta hela eventet logik eftersom jag inte vill ha tomma todos i min lista
	if (!input.trim()) {
		// töm inputet från tecken
		todoForm.reset()
		return
	}

	// om allt går som det ska, vilket innebär att någon faktiskt skrev in en riktigt todo
	// då vill jag anropa addTodo som har logiken av att skapa en todo list och lägga listan i ul-taggen
	addTodo(input)

	// töm inputet från tecken
	todoForm.reset()
})
