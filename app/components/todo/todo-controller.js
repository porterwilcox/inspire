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
	toggleTodo(id) {
		todoService.toggleTodo(id, getTodos)
	}
}
function getTodos() {
	todoService.getTodos(draw)

}
function draw(todos) {
	let template = ''
	todos.forEach(todo => {
		if (todos.indexOf(todo) % 2 == 0) {
			if (!todo.completed) {
				template += `
			<div class="card bg-dark todo-card">
				<h2 style="text-align: center">${todo.description}</h2>
				<div class="todo-controls">
					<button class="btn btn-secondary" onclick="app.controllers.todoController.toggleTodo('${todo._id}')">done</button>
					<span onclick="app.controllers.todoController.removeTodo('${todo._id}')" aria-hidden="true">&times;</span>
				</div>
			</div>
			`
			}
			else {
				template += `
			<div class="card bg-dark todo-card">
				<h2 style="text-align: center"><s>${todo.description}</s></h2>
				<div class="todo-controls">
					<button class="btn btn-secondary" onclick="app.controllers.todoController.toggleTodo('${todo._id}')">done</button>
					<span onclick="app.controllers.todoController.removeTodo('${todo._id}')" aria-hidden="true">&times;</span>
				</div>
			</div>
			`
			}
		}
		else {
			if (!todo.completed) {
				template += `
		<div class="card bg-secondary todo-card">
			<h2 style="text-align: center">${todo.description}</h2>
			<div class="todo-controls">
				<button class="btn btn-muted" onclick="app.controllers.todoController.toggleTodo('${todo._id}')">done</button>
				<span onclick="app.controllers.todoController.removeTodo('${todo._id}')" aria-hidden="true">&times;</span>
			</div>
		</div>
		`
			}
			else {
				template += `
		<div class="card bg-secondary todo-card">
			<h2 style="text-align: center"><s>${todo.description}</s></h2>
			<div class="todo-controls">
				<button class="btn btn-muted" onclick="app.controllers.todoController.toggleTodo('${todo._id}')">done</button>
				<span onclick="app.controllers.todoController.removeTodo('${todo._id}')" aria-hidden="true">&times;</span>
			</div>
		</div>
		`
			}
		}
	})
	document.querySelector(".todos").innerHTML = template
	let template2 = `
					<span class="badge badge-dark">${todos.length}</span>
						`
	document.querySelector(".todo-badge").innerHTML = template2
}

