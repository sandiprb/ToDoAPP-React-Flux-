import React from 'react';
import ToDoActions from '../actions/ToDoActions.js';


class TodoListItem extends React.Component {
	constructor(){
		super();
	}

	removeTodo(id){
		ToDoActions.deleteToDo(id)
	}

	updateTodo(todo){
		let check = this.refs.checkBoxIsComplete.checked;
		let todoToUpdate = {
			title: todo.title,
			isComplete: check,
			id: todo.id
		}
		ToDoActions.updateTodo(todoToUpdate);
	}

	render(){
		let todo = this.props;
		return (
			<div className={(!todo.isComplete ? "item__pending" : "item__done") + " list__item" }>
				<input ref="checkBoxIsComplete"
					type="checkbox"
					onChange={this.updateTodo.bind(this, todo)}/>
				{todo.title}
				<button className="btn__close pull-right"
					onClick={this.removeTodo.bind(this, todo.id)}> x </button>
			</div>
			);
	}
}

module.exports = TodoListItem;