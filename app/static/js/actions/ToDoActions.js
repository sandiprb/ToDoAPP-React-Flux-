import dispatcher from '../dispatcher/dispatcher';
import TodoConst from '../constants/TodoConstants';

const ToDoActions = {
	loadTodos: function () {
		dispatcher.dispatch({
			type: TodoConst.LOAD_TODO
		})
	},
	createTodo: function (title) {
		dispatcher.dispatch({
			type: TodoConst.CREATE_TODO,
			title,
		})
	},
	updateTodo: function (data){
		dispatcher.dispatch({
			type: TodoConst.UPDATE_TODO,
			data
		})
	},
	deleteToDo: function (id){
		dispatcher.dispatch({
			type: TodoConst.DELETE_TODO,
			id,
		})
	}
}

module.exports = ToDoActions;
