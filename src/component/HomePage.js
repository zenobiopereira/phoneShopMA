import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions.js'
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { updateNumbers } from '../actions/actions.js';
import Navbar from "../containers/Navbar.js";

var apiURL = '/phones';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
		axios.get(apiURL)
			.then((res) => {
				this.props.updateNumbers(res.data);
			});
	}

	render() {
		// console.log(this.props.homeState);
		// console.log(this.props.cartState);
		return (
			<Fragment>
				<Navbar id={this.props.cartState} name="Number Shop" />
				<div className="listItems">
					{this.props.homeState.numbers.map((e) => (
						<div className="imgDiv"> 
						<div key={e.id}>
							<p>{e.number}</p>
							<button onClick={() => this.props.actions.putNumber(e)}> Add To Cart </button>
						</div>
						</div>
					))}
				</div>
			</Fragment>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(Actions, dispatch),
		updateNumbers: phones => dispatch(updateNumbers(phones))
	};
};

const mapStateToProps = (state) => {
	return {
		homeState: state.homeState,
		cartState: state.cartState
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
