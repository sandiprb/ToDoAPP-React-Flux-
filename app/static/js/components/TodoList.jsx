import React from 'react';
import TodoListItem from './TodoListItem.jsx';

class TodoList extends React.Component {
	constructor(){
		super();
	}
	render(){
		let todos = this.props.todos;
		const TodoComponent = !todos ? null : todos.map((todo, index) => ( <TodoListItem key={index} {...todo} /> ));
	
		return (
			<div className="list">
				{TodoComponent}
			</div>
			);
	}
}

module.exports = TodoList;