var React = require('react'); 

var styles = {
	//styles object 
	title: {
		backgroundColor: 'yellow', 
		color: 'red'
	}

}

var myComp = React.createClass({
	getInitialState: function() {
		return {
			subject: "DevMtn"
		}
	},
	handleClick: function(evt) {
		evt.preventDefault(); 
		alert('I was clicked'); 
	},
	render: function(){ //every react class has to have at least a render method 
		return(
			<h1>{this.props.greeting}, DevMtn! </h1>
			<button onClick={this.handleClick}>Change</button> 
		)
	}
})

React.render(<MyComp greeting="Wie gehts", {this.state.subject}! />, document.getElementById('app'));  