import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
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
			<div>
				<label htmlFor="instagram">Instagram</label>
				<input
					type="checkbox"
					id="instagram"
					onChange={(e) => {
						socket && socket.emit("set-instagram", e.target.checked);
					}}
				/>
			</div>
		</>
	);
};

export default Home;
