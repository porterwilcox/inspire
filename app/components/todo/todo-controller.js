import TodoService from "./todo-service.js";

let todoService = new TodoService

export default class TodoController {
	constructor() {
		todoService.getTodos(draw)
	}
	addTodo(e) {
		todoService.addTodo(e.target.value, getTodos)
		document.querySelector(".todo").value = ""
	}
	removeTodo(id) {
		todoService.removeTodo(id, getTodos)
	}
}
function getTodos() {
	todoService.getTodos(draw)

}
function draw(todos) {
	console.log(todos)
	let template = ''
	todos.forEach(todo => {
		if (todos.indexOf(todo) % 2 == 0) {
			template += `
		<div class="card bg-primary">
			<h2 style="text-align: center">${todo.description}</h2>
			<span onclick="app.controllers.todoController.removeTodo('${todo._id}')" aria-hidden="true">&times;</span>
		</div>
		`
		}
		else {
			template += `
		<div class="card bg-info">
			<h2 style="text-align: center">${todo.description}</h2>
			<span onclick="app.controllers.todoController.removeTodo('${todo._id}')" aria-hidden="true">&times;</span>
		</div>
		`
		}
	})
	document.querySelector(".todos").innerHTML = template
	let template2 =`
	<span class="badge badge-dark">${todos.length}</span>
	`
	document.querySelector(".todo-badge").innerHTML = template2
}

