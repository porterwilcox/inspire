export default class Todo {
    constructor(data, editToggle) {
        this.description = data.description
        this._id = data._id
        this.user = data.user
        this.completed = data.completed
        this.__v = data.__v
    }
}