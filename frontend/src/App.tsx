import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from '@store';
import 'react-toastify/dist/ReactToastify.css';
import { AdminEndpoint } from './AdminEndpoint';
import { PublicEndpoint } from './PublicEndpoint';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router>
				<AdminEndpoint />
				<PublicEndpoint/>
				<GlobalStyle />
			</Router>
		</Provider>
	);
}

export default App;