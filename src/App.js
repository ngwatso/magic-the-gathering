import React from "react";
import { Route } from "react-router-dom";
import Card from "./components/card";
import axios from "axios";
import "./App.css";

function App() {
	axios.get("https://api.magicthegathering.io/v1/cards")
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.log("ERROR", err);
		});

	return (
		<div className="App">
			<Route exact path="./components/card" component={Card} />
		</div>
	);
}

export default App;
