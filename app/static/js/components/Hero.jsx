import React from 'react';

class Hero extends React.Component {
	render(){
		return <div>
			<h2 className={this.props.className}>{this.props.text}</h2>
		</div>;
	}
}

Hero.defaultProps ={
	text: 'React.',
	className: 'hero'
};

module.exports = Hero;