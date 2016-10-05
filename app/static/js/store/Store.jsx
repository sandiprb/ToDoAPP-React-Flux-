import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher'
import API from './API'
import TodoConst from '../constants/TodoConstants';


class TodoStore extends EventEmitter{

	constructor(){
		super()
		this.todos = []
	}

	createTodo(title){
		let todo = {title, isComplete: false}
		console.log(todo);
		API.createTodo(todo, (function(data){
			this.todos.push(data)
			this.emit("change");
		}).bind(this))
	}

	deleteTodo(id){
		API.deleteTodo(id, (function(id){
			let todoToPop = this.todos.find(x=> x.id === id)
			this.todos.pop(todoToPop);
			this.emit("change");
		}).bind(this));
	}

	updateTodo(data){
		API.updateTodo(data, (function(updated){
			if(updated){
				let index;
				this.todos.map((v,i) =>  v.id === data.id ? index = i : null)
				this.todos[index] = data;
				this.emit("change");
			}
		}).bind(this))
	}

	getTodos(){
		if(this.todos.length === 0){
			API.getTodos((function(data){
				this.todos = data;
				this.emit("change");
			}).bind(this));
		}else{
			return this.todos
		}
	}

	handleAction(action){
		switch (action.type){
			case TodoConst.LOAD_TODO: {
				this.getTodos()
			}
			break;
			case TodoConst.CREATE_TODO: {
				this.createTodo(action.title)
			}
			break;
			case TodoConst.DELETE_TODO:{
				this.deleteTodo(action.id)
			}
			break;
			case TodoConst.UPDATE_TODO:{
				this.updateTodo(action.data)
			}
			break;
		}
	}
}
const todoStore = new TodoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));
export default todoStore;