import dispatcher from '../dispatcher/dispatcher';

const ToDoActions = {
	loadTodos: function () {
		dispatcher.dispatch({
			type: 'LOAD_TODO'
		})
	},
	createTodo: function (title) {
		dispatcher.dispatch({
			type: 'CREATE_TODO',
			title,
		})
	},
	updateTodo: function (data){
		dispatcher.dispatch({
			type: 'UPDATE_TODO',
			data
		})
	},
	deleteToDo: function (id){
		dispatcher.dispatch({
			type: 'DELETE_TODO',
			id,
		})
	}
}

module.exports = ToDoActions;
