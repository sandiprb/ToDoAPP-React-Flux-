import React from 'react';
import {render} from 'react-dom';

/*components*/
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';

/*utils*/
import TodoStore from '../store/Store.jsx';
import ToDoActions from '../actions/ToDoActions.js';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			todos : TodoStore.getTodos()

		};
	}

	componentWillMount(){
		TodoStore.on('change', () => {
			this.setState({
				//update store whenever the store changes
				todos: TodoStore.getTodos()
			})
		});
	}

	createToDo(){
		ToDoActions.createTodo(Date.now());
	}

	render(){

		return (
			<div>
				<TodoForm />
				<TodoList todos={this.state.todos} />
			</div>
		);
	}
}

module.exports = App;