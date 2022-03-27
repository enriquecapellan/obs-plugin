import React, { useEffect, useState } from "react";
import styled from "styled-components";
import io, { Socket } from "Socket.IO-client";
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
	};

	return (
		<Wrapper>
			<div id="container" className="container">
				<div className="logo-container">
					<img src="./logo.png" alt="" className="logo" />
				</div>
				<div className="content">
					<h2 className="name">José Peguero</h2>
					<p className="description">Mensaje</p>
				</div>
			</div>

			<div className={`social ${state.social.instagram.active && "active"}`}>
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
	background-color: rgb(49, 51, 53);
	font-family: "Courier New", Courier, monospace;

	.social {
		background-color: white;
		border-radius: 0.5rem;
		display: flex;
		transition: all 2s ease-in-out;
		overflow: hidden;
		flex: 0 0 auto;
		align-items: center;

		&.active {
			flex: 0 1 auto;
			padding: 1rem;
		}

		.icon {
			display: flex;
			padding: 1rem;
			img {
				width: 3rem;
			}
		}
	}

	.social-name {
		font-size: 2.5rem;
		margin: 0;
	}

	.container {
		color: white;
		background-color: rgb(49, 51, 53);
		border-radius: 16px;
		font-family: "Courier New", Courier, monospace;
		align-items: center;
		padding: 1rem;
		transition: all 2s ease-in-out;
		overflow: hidden;
		width: fit-content;
		display: none;
	}

	.container.active {
		opacity: 0.9;
	}

	.name {
		font-size: 3rem;
		margin: 0;
		margin-bottom: 0.5rem;
	}

	.description {
		font-size: 2rem;
		margin: 0;
	}

	.logo-container {
		padding: 1rem;
		margin-right: 1rem;
		background-color: white;
		border-radius: 0.5rem;
	}

	.logo {
		width: 8rem;
	}
`;

export default Titles;
