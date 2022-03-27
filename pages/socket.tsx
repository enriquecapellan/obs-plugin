import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import styled from 'styled-components'

let socket: Socket;

const Home = () => {
	useEffect(() => {
		socketInitializer();
	}, []);

	const socketInitializer = async () => {
		await fetch("/api/socket");
		socket = io();

		socket.on("connect", () => {
			console.log("connected");
		});
	};

	return (
		<>
			<div className='container'>
				<label htmlFor="instagram">Instagram</label>
				<input
					type="checkbox"
					id="instagram"
					onChange={(e) => {
						socket && socket.emit("set-instagram", e.target.checked);
					}}
				/>

				<div className='setting-container'>

				</div>
			</div>
		</>
	);
};

const Wrapper = styled.div`
	.contiainer {
		display: flex;
		flex-direction: column;
	}
	.setting-container {
		boder: 1px solid black;
		padding: 1rem;
	}
`

export default Home;
