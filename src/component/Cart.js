import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import * as Actions from '../actions/actions.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from '../containers/Navbar.js';

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		// console.log(this.props.cartState);
		return (
			<Fragment>
				<Navbar id={this.props.cartState} name="Your Cart"/>
				<div className="listItems">
					{this.props.cartState.map((e) => (
						<div className="imgDiv">
						<div key={e.id}>
						<p> {e.number} </p>
						<button onClick={() => this.props.actions.deleteNumber(e.id)}>
						Remove From Cart
						</button>
						</div>
						</div>
					))}
				</div>
				<div className="containerButton">
				<button className="confirmButton" onClick={() => (this.props.actions.cleanCart(), window.alert('Your Purchase have been completed, Thank You'))}>
					PURCHASE NOW
				</button>
				<button className="delButton" onClick={() => (
					window.confirm("Clean Cart?"))
					? this.props.actions.cleanCart()
					: null} >
					CLEAR CART
				</button>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cartState: state.cartState
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
