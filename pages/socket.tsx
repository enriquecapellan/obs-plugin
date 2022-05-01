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
		<Wrapper>
			<div className="container2">
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
		</Wrapper>
	);
};

const Wrapper = styled.div`
	font-family: helvetica;
	font-size: 1.2rem;

	.contiainer2 {
		display: flex;
		flex-direction: column;
	}

	.setting-container {
		margin-top: 1rem;
		border-radius: 8px;
		border: 1px solid gray;
		padding: 1rem;
		display: flex;
		flex-direction: column-reverse;
		gap: 0.5rem;

		input {
			border-radius: 4px;
			border: 1px solid gray;
			height: 1.2rem;
			padding: 0.3rem;
		}

		background-color: #304c72;
		color: white;
	}

	input[type="checkbox"] {
		margin: 0;
	}

	.checkbox-container {
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-end;
		align-items: center;
		gap: 0.2rem;
	}
`;

export default Home;
