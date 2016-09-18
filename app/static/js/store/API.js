import ToDoActions from '../actions/ToDoActions.js';
import request from 'superagent';

const BASE_URL = 'http://rest.learncode.academy/api/sandipreacts/todo';

const API = {
	getTodos: function (callback){
		request
		.get(BASE_URL)
		.set('Accept', 'application/json')
		.end(function(err, res){
			if(res.ok){
				callback(res.body)
			}else{
				alert("Error! Pleasecheck console")
				console.log(err);
			}
		});
	},
	createTodo: function (data,callback){
		request
		.post(BASE_URL)
		.send(data)
		.set('Accept', 'application/json')
		.end(function(err, res){
			if(res.ok){
				callback(res.body)
			}else{
				alert("Error! Pleasecheck console")
				console.log(err);
			}
		});
	},
	deleteTodo: function (id,callback){
		request
		.delete(BASE_URL+'/'+id)
		.set('Accept', 'application/json')
		.end(function(err, res){
			if(res.ok){
				callback(id)
			}else{
				alert("Error! Pleasecheck console")
				console.log(err);
			}
		});
	}
}

module.exports = API