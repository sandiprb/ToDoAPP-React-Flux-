import {EventEmitter} from 'events';
import dispatcher from '../dispatcher/dispatcher'
import API from './API'

var _todos =  []

class TodoStore extends EventEmitter{

	createTodo(title){
		let todo = {
			title,
			isComplete: false
		}
		API.createTodo(todo, (function(data){
			if(_todos.length){
				_todos.push(data)
			}else{
				_todos = [];
				_todos.push(data)
			}
			this.emit("change");
		}).bind(this))
	}

	deleteTodo(id){
		API.deleteTodo(id, (function(id){
			let todoToComplete = _todos.find(x=> x.id === id)
			_todos.pop(todoToComplete);
			this.emit("change");
		}).bind(this));
	}

	loadTodos(){
		API.getTodos((function(data){
			_todos = data;
			this.emit("change");
		}).bind(this));
	}

	getTodos(){
		return _todos;
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
			case "DELETE_TODO":{
				this.deleteTodo(action.id)
			}
			break;
		}
	}
}
const todoStore = new TodoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));
export default todoStore;