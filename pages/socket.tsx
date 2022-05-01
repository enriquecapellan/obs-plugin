import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import styled from "styled-components";

let socket: Socket;

const Home = () => {
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
		socket = io();
	};

	return (
		<div className="panel">
			<div className="container2">
				<div className="setting-container">
					<div className="checkbox-container">
						<label htmlFor="instagram">Instagram</label>
						<input
							type="checkbox"
							id="instagram"
							onChange={(e) => {
								socket && socket.emit("set-instagram", e.target.checked);
							}}
						/>
					</div>
				</div>

				<div className="setting-container">
					<input placeholder="Name" value={info.title} onChange={(e) => setInfo({ ...info, title: e.target.value })} />
					<input
						placeholder="Description"
						value={info.description}
						onChange={(e) => setInfo({ ...info, description: e.target.value })}
					/>
					<div className="checkbox-container">
						<label htmlFor="info">Information</label>
						<input
							type="checkbox"
							id="info"
							onChange={(e) => {
								socket && socket.emit("set-info", { ...info, active: e.target.checked });
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
