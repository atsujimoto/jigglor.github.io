import React, { Component } from 'react';

class Display extends Component {
	render() {
		const classProp = this.props.class ? this.props.class : '';

		return (this.props.if) ? (
		    <div className={ classProp } >
		    	{ this.props.children }
		    </div>
		) : null;
	}
}

export default Display;
