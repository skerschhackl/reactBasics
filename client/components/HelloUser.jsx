import React from 'react';

export default class HelloUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: this.props.username,
			greeting: 'Hello'
		};
	}
	
	componentWillMount() {
		let username = prompt('What\'s your name?');
		if(username === "" || username === null)
			return;
		this.setState({
			username : username
		});
	}
	
	handleNameChange(e) {
		this.setState({
			username : e.target.value
		});
	}
	
	handleGreetingChange(e) {
		this.setState({
			greeting: e.target.value
		});
	}
	
	render() {
		return (
			<div>
			<h3>
				{this.state.greeting} {this.state.username}!
			</h3>
			<div className="changeBox">
				<p>Change Name: 
					<input type="text" name="username" value={this.state.username} onChange={this.handleNameChange.bind(this)} />
				</p>
				<p>Change Greeting: 
					<input type="text" name="greeting" value={this.state.greeting} onChange={this.handleGreetingChange.bind(this)} />
				</p>
			</div>
			</div>
		)
	}
	
	
}