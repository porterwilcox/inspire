let yourName = localStorage.getItem("name")

const todoApi = axios.create({
	baseURL: `https://bcw-sandbox.herokuapp.com/api/${yourName}/todos/`,
	timeout: 3000
});


let todoArr
export default class TodoService {
	constructor() {

	}
	getTodos(draw) {
		todoApi.get('')
			.then(res => {
				todoArr = Array.from(res.data.data)
				draw(todoArr)
			})
	}
	addTodo(todo, callback) {
		todoApi.post('', {
			description: todo
		})
			.then(callback)
	}
	removeTodo(id, callback) {
		todoApi.delete(id)
			.then(callback)
	}
	toggleTodo(id, callback) {
		let yourTodo = todoArr.find(t => {
			return t._id == id
		})
		if(!yourTodo.completed) {
			todoApi.put(`${id}`, {
				completed: true
			})	
		}
		else {
			todoApi.put(`${id}`, {
				completed: false
			})
		}
		let wait = setTimeout(callback, 750)		
	}
}
