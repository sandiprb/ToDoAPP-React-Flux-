import dispatcher from '../dispatcher/dispatcher';

const ToDoActions = {
	loadTodos: function (data) {
		dispatcher.dispatch({
			type: 'LOAD_TODO',
			data,
		})
	},
	createTodo: function (title) {
		dispatcher.dispatch({
			type: 'CREATE_TODO',
			title,
		})
	},
	completeTodo: function (id){
		dispatcher.dispatch({
			type: 'DELETE_TODO',
			id,
		})
	}
}

module.exports = ToDoActions;
