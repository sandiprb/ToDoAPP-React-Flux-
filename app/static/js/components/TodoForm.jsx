import React from 'react';
import ToDoActions from '../actions/ToDoActions.js';


class TodoForm extends React.Component {
	constructor(props) {
		super(props);
	}

	createNewTodo(){
		let input = this.refs.todoinput.value;
		!input ? alert('Please enter text') : ToDoActions.createTodo(input);
	}

	render() {
		return(
			<div>
				<div className="form-group">
					<input ref="todoinput"
						type="text"
						className="form-control"
						placeholder="New Todo text"/>
				</div>
				<div className="form-group clearfix">
				<button className="btn btn-primary pull-right"
						onClick={this.createNewTodo.bind(this)}>Create</button>
				</div>
			</div>
		);
	}
}

module.exports = TodoForm;
