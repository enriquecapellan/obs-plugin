import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
		title: '',
		description: '',
		active: false
	})

	useEffect(() => {
		socketInitializer();
	}, []);

	const socketInitializer = async () => {
		await fetch("/api/socket");
		socket = io();

		socket.on("connect", () => {
			console.log("connected");
		});

		socket.on("set-instagram", (value) => {
			console.log("SET_INSTAGRAM");
			const { social } = state;
			social.instagram.active = value;
			setState({ ...state, social });
		});

		socket.on("set-info", (value) => {
			console.log("SET_INFO");
			setInfo(value);
		});
	};

	return (
		<div className='plugin-container'>
			<div id="container" className={`container ${info.active && "active"}`}>
				<div className="logo-container">
					<img src="./logo.png" alt="" className="logo" />
				</div>
				<div className="content">
					<h2 className="name">{info.title}</h2>
					<p className="description">{info.description}</p>
				</div>
			</div>

			<div className={`social ${state.social.instagram.active && "active"}`}>
				<div className="icon">
					<img src={state.social.instagram.logo} alt="" />
				</div>
				<div className="social-name">@{state.social.instagram.userName}</div>
			</div>
		</div>
	);
};


export default Titles;
