import dispatcher from '../dispatcher/dispatcher';

const ToDoActions = {
	createTodo: function (title) {
		dispatcher.dispatch({
			type: 'CREATE_TODO',
			title,
		})
	},
	completeTodo: function (id){
		dispatcher.dispatch({
			type: 'COMPLETE_TODO',
			id,
		})
	}
}

module.exports = ToDoActions;
