import { render } from "@testing-library/react";
import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

class App extends React.Component {
	render() {
		return (
			<nav className="App">
				<Navbar />
				<div className="container">
					<Users />
				</div>
			</nav>
		);
	}
}

export default App;
