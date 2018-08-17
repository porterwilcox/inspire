
let yourName = localStorage.getItem("name")

const todoApi = axios.create({
	baseURL: `https://bcw-sandbox.herokuapp.com/api/${yourName}/todos/`,
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {
	constructor(){

	}
	getTodos(draw) {
		todoApi.get('')
			.then((res) => {
				draw(res.data.data)
			})
			.catch(logError)
	}

	addTodo(todo, callback) {
		todoApi.post('', {
			description: todo
		})
			.then(callback)
	}

	toggleTodoStatus(todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		var todo = {} ///MODIFY THIS LINE

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(logError)
	}

	removeTodo(id, callback) {
		todoApi.delete(id)
			.then(callback)
	}

}
