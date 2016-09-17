import ToDoActions from '../actions/ToDoActions.js';
import request from 'superagent';

const BASE_URL = 'http://rest.learncode.academy/api/sandipreact/todo';

const API = {
	getTodos: function (){
		request
		.get(BASE_URL)
		.set('Accept', 'application/json')
		.end(function(err, res){
			if(res.ok){
				ToDoActions.loadTodos(res.body)
			}else{
				alert("Error! Pleasecheck console")
				console.log(err);
			}
		});
	}
}

module.exports = API