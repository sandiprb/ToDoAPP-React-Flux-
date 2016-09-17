import {EventEmitter} from 'events';
import dispatcher from '../dispatcher/dispatcher'
import API from './API'

class TodoStore extends EventEmitter{
	constructor(){
		super();
		this.todos =  API.getTodos();
	}

	loadTodos(data){
		this.todos = data;

		this.emit("change");
	}

	createTodo(title){
		const id = this.todos.length;
		this.todos.push({
			title,
			isComplete: false,
			id
		})

		this.emit("change");
	}

	completeTodo(toId){
		let todoToComplete = this.todos.find(x=> x.id === toId)
		todoToComplete.isComplete = true;

		this.emit("change");
	}

	getTodos(){
		return this.todos;
	}

	handleAction(action){
		switch (action.type){
			case "LOAD_TODO": {
				this.loadTodos(action.data)
			}
			break;
			case "CREATE_TODO": {
				this.createTodo(action.title)
			}
			break;
			case "COMPLETE_TODO":{
				this.completeTodo(action.id)
			}
			break;
		}
	}
}
const todoStore = new TodoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));
export default todoStore;