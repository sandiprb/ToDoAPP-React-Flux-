import React from 'react';


class TodoListItem extends React.Component {
	constructor(){
		super();
		this.state = {}
	}

	render(){
		let todo = this.props;
		return (
				<div className={(!todo.isComplete ? "item__pending" : "item__done") + " list__item" }>
				{!todo.isComplete ?
					<div>  {todo.title} <button className="btn__close pull-right">x</button> </div> :
					<div> {todo.title} </div>}
				</div>
		);
	}
}

module.exports = TodoListItem;