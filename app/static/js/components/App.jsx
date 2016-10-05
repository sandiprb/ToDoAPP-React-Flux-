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
		this.getTodos = this.getTodos.bind(this);
		this.state = {
			todos : TodoStore.getTodos()

		};
	}

	componentWillMount(){
		TodoStore.on('change', this.getTodos);
	}

	componentWillUnmount(){
		TodoStore.removeListener('change', this.getTodos);
	}

	getTodos(){
		this.setState({
			todos: TodoStore.getTodos()
		})
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