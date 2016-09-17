import React from 'react';
import ToDoActions from '../actions/ToDoActions.js';


class TodoListItem extends React.Component {
	constructor(){
		super();
		this.state = {}
	}

	comepleteTodo(id){
		ToDoActions.completeTodo(id)
	}

	render(){
		let todo = this.props;
		return (
			<div className={(!todo.isComplete ? "item__pending" : "item__done") + " list__item" }>
			{!todo.isComplete ?
				<div>
				{todo.title}
				<button className="btn__close pull-right"
					onClick={this.comepleteTodo.bind(this, todo.id)}> x </button>
				</div> :
				<div> {todo.title} </div>
			}
			</div>
			);
	}
}

module.exports = TodoListItem;