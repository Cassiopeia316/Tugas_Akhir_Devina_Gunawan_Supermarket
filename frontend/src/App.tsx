import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from '@store';
import 'react-toastify/dist/ReactToastify.css';
import { Endpoint } from './Endpoint';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router>
				<Endpoint/>
				<GlobalStyle />
			</Router>
		</Provider>
	);
}

export default App;