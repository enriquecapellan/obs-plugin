import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import styled from "styled-components";
import Tab from "../components/Tab";

import Button from "../components/Button";
import PanelBible from "../components/bible/PanelBible";

let socket: Socket;

const Panel = () => {
	const [info, setInfo] = useState({
		title: "",
		description: "",
		active: false
	});

	const [instagram, setInstagram] = useState(false);

	useEffect(() => {
		socketInitializer();
	}, []);

	function toggleInstagram() {
		socket.emit("set-instagram", !instagram);
		setInstagram(!instagram);
		setTimeout(() => {
			setInstagram(false);
		}, 15000);
	}

	function toggleInfo() {
		socket && socket.emit("set-info", { ...info, active: !info.active });
		setInfo({ ...info, active: !info.active });

		setTimeout(() => {
			setInfo({ ...info, active: false });
		}, 15000);
	}

	function selectVerse(verse: any) {
		console.log(verse)
		socket && socket.emit("set-verse", verse);
	}

	const socketInitializer = async () => {
		await fetch("/api/socket");
		socket = io();
	};

	return (
		<Wrapper>
			<div className="container">
				<Tab
					items={[
						{
							title: "Títulos",
							content: (
								<>
									<div className="setting-container">
										<div className="checkbox-container">
											<span className="title">Instagram</span>
											<Button text={instagram ? "Ocultar" : "Mostrar"} onClick={toggleInstagram} />
										</div>
									</div>

									<div className="setting-container">
										<div className="checkbox-container">
											<span className="title">Information</span>
											<Button text={info.active ? "Ocultar" : "Mostrar"} onClick={toggleInfo} />
										</div>
										<input
											placeholder="Name"
											value={info.title}
											onChange={(e) => setInfo({ ...info, title: e.target.value })}
										/>
										<input
											placeholder="Description"
											value={info.description}
											onChange={(e) => setInfo({ ...info, description: e.target.value })}
										/>
									</div>
								</>
							)
						},
						{
							title: "Biblia",
							content: (
								<div className="setting-container">
									<PanelBible onSelect={selectVerse} />
								</div>
							)
						}
					]}
				/>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: #4b4d52;
	width: 100%;
	height: 100%;
	position: fixed;
	font-family: helvetica;
	padding: 1rem;
	box-sizing: border-box;

	.container {
		display: flex;

		.tab_content {
			display: flex;
			flex-direction: column;

			.setting-container {
				margin-top: 1rem;
				border-radius: 8px;
				padding: 1rem;
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				background-color: #757575;

				.title {
					font-size: 1.2rem;
					color: white;
				}
			}
		}
	}

	input {
		border-radius: 4px;
		border: none;
		height: 1.2rem;
		padding: 0.3rem;
	}

	input[type="checkbox"] {
		margin: 0;
	}

	.checkbox-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.2rem;
	}

	.checkbox-container input,
	.checkbox-container label {
		cursor: pointer;
	}

	.button {
		border: 1px solid gray;
		border-radius: 4px;
		background-color: white;
		color: gray;
		height: 2rem;
	}
`;

export default Panel;
