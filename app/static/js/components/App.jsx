import React from 'react';
import {render} from 'react-dom';

import TodoList from './TodoList.jsx';
import getTodos from '../utils/Store.jsx';


class App extends React.Component {
	constructor(){
		super();
		this.state = {
			todos : getTodos()
		};
	}

	render(){

		return (
			<div>
				<TodoList todos={this.state.todos} />
			</div>
		);
	}
}

render(<App />, document.getElementById("app"));