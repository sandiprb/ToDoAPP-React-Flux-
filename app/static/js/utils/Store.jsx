import request from 'superagent'

const BASE_URL = 'http://rest.learncode.academy/api/sandip/todos';

function getTodos(){
	let todos = [{
		title: "Learn React",
		isComplete: true,
		id: "1"
	},{
		title: "Create APP",
		isComplete: false,
		id: "2"
	},{
		title: "Learn Redux",
		isComplete: false,
		id: "3"
	},{
		title: "Get shit done",
		isComplete: false,
		id: "4"
	},{
		title: "Get shit done",
		isComplete: false,
		id: "4"
	}];
	return  todos;
}


module.exports = getTodos;
