import React from 'react';
import {render} from 'react-dom';

import Hero from './Hero.jsx';

class App extends React.Component {
	render(){
		return <div>
		<Hero />
		</div>;
	}
}

render(<App />, document.getElementById("app"))