import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [auth, setAuth] = useState(false);

	const pedirData = () => {
		fetch("https://3001-rose-puma-j57opcc3.ws-us08.gitpod.io/user", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("token")
			}
		})
			.then(response => response.json())
			.then(data => {
				console.log(data);
				data === "ACCESS DENIED" ? console.log("Necesitas loguearte") : setAuth(true);
			});
	};

	return (
		<div className="text-center mt-5">
			{auth ? (
				<Redirect to="/demo" />
			) : (
				<button className="bnt btn-success" onClick={pedirData}>
					Pedir datos privados
				</button>
			)}
		</div>
	);
};
