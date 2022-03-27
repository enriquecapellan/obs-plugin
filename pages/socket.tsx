import { useEffect, useState } from "react";
import io, { Socket } from "Socket.IO-client";
let socket: Socket;

const Home = () => {
	const [input, setInput] = useState("");

	useEffect(() => {
		socketInitializer();
	}, []);

	useEffect(() => {
		if (socket) socket.emit("input-change", { input });
	}, [input]);

	const socketInitializer = async () => {
		await fetch("/api/socket");
		socket = io();

		socket.on("connect", () => {
			console.log("connected");
		});

		socket.on("update-input", (msg) => {
			setInput(msg.input);
		});
	};

	return (
		<>
			<input placeholder="Type something" value={input} onChange={(e) => setInput(e.target.value)} />

			<div>
				<label htmlFor="instagram">Instagram</label>
				<input
					type="checkbox"
					id="instagram"
					onChange={(e) => {
						console.log("SET_INSTAGRAM", e.target.checked);

						socket && socket.emit("set-instagram", e.target.checked);
					}}
				/>
			</div>
		</>
	);
};

export default Home;
