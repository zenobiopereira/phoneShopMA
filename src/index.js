import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch, HashRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./reducers/index.js";
import HomePage from "./component/HomePage.js";
import Cart from "./component/Cart.js";
import { loadState, saveState } from './reducers/localStorage.js'
import './stylesheets/styles.scss'

// const store = createStore(rootReducer);
const persistedState = loadState();
const StoreInstance = createStore(
	rootReducer,
	persistedState
)
StoreInstance.subscribe(() => {
	saveState(StoreInstance.getState());
})


render(
	<Provider store={StoreInstance}>
		<HashRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/cart" component={Cart} />
			</Switch>
		</HashRouter>
	</Provider>
	, document.getElementById("index")
);