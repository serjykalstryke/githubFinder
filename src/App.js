import { render } from "@testing-library/react";
import React from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";

class App extends React.Component {
	state = {
		users: [],
		loading: false,
	};
	async componentDidMount() {
		this.setState({ loading: true });

		const res = await axios.get(
			`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_secret}`
		);

		this.setState({ users: res.data, loading: false });
	}

	render() {
		return (
			<nav className="App">
				<Navbar />
				<div className="container">
					<Search />
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</nav>
		);
	}
}

export default App;
