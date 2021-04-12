import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import UserProvider from "./providers/UserProvider";
import Dashboard from "./screen/Dashboard";

function App() {
	return (
		<UserProvider>
			<Router>
				<div className='App'>
					<Switch>
						<Route exact path='/'>
							<Login />
						</Route>
						<Route path='/dashboard'>
							<Dashboard />
						</Route>
					</Switch>
				</div>
			</Router>
		</UserProvider>
	);
}

export default App;
