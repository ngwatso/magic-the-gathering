import React from "react";
import axios from "axios";

export default function CardData() {
	axios.get("https://api.magicthegathering.io")
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log("ERROR", err);
		});
}
