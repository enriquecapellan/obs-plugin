import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
let socket: Socket;

const Titles = () => {
	const [state, setState] = useState({
		social: {
			instagram: {
				logo: "./instagram.jpeg",
				userName: "adcentralbani",
				active: false
			}
		}
	});

	const [info, setInfo] = useState({
		title: "",
		description: "",
		active: false
	});

	useEffect(() => {
		socketInitializer();
	}, []);

	const socketInitializer = async () => {
		await fetch("/api/socket");
		socket = io({ reconnection: false });

		const tryReconnect = () => {
			setTimeout(() => {
				socket.io.open((err) => {
					if (err) {
						tryReconnect();
					}
				});
			}, 2000);
		};

		socket.on("set-instagram", (value) => {
			const { social } = state;
			social.instagram.active = value;
			setState({ ...state, social });
			if (value) {
				setTimeout(() => {
					social.instagram.active = false;
					setState({ ...state, social });
				}, 15000);
			}
		});

		socket.on("set-info", (value) => {
			setInfo(value);
			if (value) {
				setTimeout(() => {
					setInfo({ ...value, active: false });
				}, 15000);
			}
		});
		socket.io.on("close", tryReconnect);
	};

	return (
		<div className="plugin-container">
			<div id="container" className={`container ${info.active ? "active" : "hidden"}`}>
				<div className="logo-container">
					<img src="./logo.png" alt="" className="logo" />
				</div>
				<div className="content">
					<h2 className="name">{info.title}</h2>
					<p className="description">{info.description}</p>
				</div>
			</div>

			<div className={`social ${state.social.instagram.active ? "active" : "hidden"}`}>
				<div className="icon">
					<img src={state.social.instagram.logo} alt="" />
				</div>
				<div className="social-name">@{state.social.instagram.userName}</div>
			</div>
		</div>
	);
};

export default Titles;
