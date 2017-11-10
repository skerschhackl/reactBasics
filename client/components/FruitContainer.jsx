import React from 'react';

export default class FruitContainer extends React.Component{
	constructor(props) {
		super(props);
		this.addFruit = this.addFruit.bind(this);
		this.removeFruit = this.removeFruit.bind(this);
		this.showErrMsg = this.showErrMsg.bind(this);
		this.state = {
			name: 'Fruits',
			fruits: ['Apple', 'Banana'],
			count: 2,
			errMsg: ''
		};
	}
	
	addFruit(fruit) {
		this.setState({
			fruits: this.state.fruits.concat([fruit]),
			count: this.state.fruits.length +1
		});
	}
	
	removeFruit(index) {
		this.state.fruits.splice(index, 1);
		this.setState({
			fruits: this.state.fruits,
			count: this.state.fruits.length 
		});
	}
	
	showErrMsg(errMsg) {
		this.setState({
			errMsg: errMsg
		});
	}
	
	render() {
		return (
			<div>
				<h3>Fruits</h3>
				<p>(total: {this.state.count})</p>
				<span className="error">{this.state.errMsg}</span>
				<AddFruit showMsg={this.showErrMsg} addNew={this.addFruit} />
				<ShowList fruits={this.state.fruits} deleteFruit={this.removeFruit} />
			</div>
		);
	}
}

class ShowList extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteFruit = this.handleDeleteFruit.bind(this);
	}
	
	handleDeleteFruit (e) {
		this.props.deleteFruit(e.target.value);
	}
	
	render() {
		var listItems = this.props.fruits.map(function(type, i) {
			return (
				<li key={type}> 
					{type} 
					<button value={i} onClick={this.handleDeleteFruit}>delete</button> 
				</li> 
			);
		}, this);
		return (
			<div>
				<ul>
					{listItems}
				</ul>
			</div>
		);
	}
}


class AddFruit extends React.Component {
	constructor(props) {
		super(props);
		this.updateNewFruit = this.updateNewFruit.bind(this);
		this.handleAddNew = this.handleAddNew.bind(this);
		this.state = {
			newFruit: ''
		};
	}
	
	updateNewFruit(e) {
		this.setState({
			newFruit: e.target.value
		});
	}
	
	handleAddNew() {
		if(this.state.newFruit === "") {
			this.props.showMsg('Please enter a Fruit!');
			return;			
		}
		this.props.showMsg('');
		this.props.addNew(this.state.newFruit);
		this.setState({
			newFruit: ''
		});
	}
	
	render() {
		return (
			<div>
				<input type="text"
					value= {this.state.newFruit}
					onChange={this.updateNewFruit} />
					<button className="addButton" onClick={this.handleAddNew}>Add Fruit</button>
			</div>
		);
	}
}




