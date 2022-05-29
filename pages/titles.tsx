import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
let socket: Socket;

import styled from "styled-components";

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
		<Wrapper>
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
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: flex-end;
	height: 100vh;
	padding: 3rem;
	box-sizing: border-box;
	color: rgb(49, 51, 53);
	font-family: "Courier New", Courier, monospace;

	.social {
		background-color: white;
		border-radius: 0.5rem;
		display: flex;
		transition: all 2s ease-in-out;
		overflow: hidden;
		align-items: center;
		padding: 1rem;
		opacity: 0;
	}

	.social.hidden {
		transform: scale(0);
	}

	.social.active {
		opacity: 0.9;
	}

	.social .icon {
		display: flex;
		margin-right: 1rem;
	}

	.social .icon img {
		width: 3rem;
	}

	.social-name {
		font-size: 2.5rem;
		font-weight: 600;
		margin: 0;
	}

	.container {
		color: rgb(49, 51, 53);
		background-color: white;
		border-radius: 16px;
		font-family: "Courier New", Courier, monospace;
		align-items: center;
		padding: 1rem;
		transition: all 2s ease-in-out;
		overflow: hidden;
		width: fit-content;
		display: flex;
		opacity: 0;
	}

	.container.hidden {
		transform: scale(0);
	}

	.container.active {
		opacity: 0.9;
	}

	.name {
		font-size: 2rem;
		margin: 0;
		margin-bottom: 0.5rem;
	}

	.description {
		font-size: 2rem;
		margin: 0;
	}

	.logo-container {
		margin-right: 1rem;
		background-color: white;
		border-radius: 0.5rem;
	}

	.logo {
		width: 8rem;
	}
`;

export default Titles;
