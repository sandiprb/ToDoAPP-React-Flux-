import {EventEmitter} from 'events';
import dispatcher from '../dispatcher/dispatcher'


class TodoStore extends EventEmitter{
	constructor(){
		super();
		this.todos =  [{
			title: "Learn React",
			isComplete: true,
			id: "1"
		},{
			title: "Create APP",
			isComplete: false,
			id: "2"
		},{
			title: "Learn Redux",
			isComplete: false,
			id: "3"
		},{
			title: "Get shit done",
			isComplete: false,
			id: "4"
		},{
			title: "Do epic shit",
			isComplete: false,
			id: "5"
		}];
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
		console.log(action);
		switch (action.type){
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