import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import styled from "styled-components";
import Tabs, { TabPane } from "rc-tabs";

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

	const socketInitializer = async () => {
		await fetch("/api/socket");
		socket = io();
	};

	return (
		<Wrapper>
			<div className="container">
				<Tabs>
					<TabPane tab="Títulos" key="1">
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
					</TabPane>
					<TabPane tab="Biblia" key="2">
						<div className="setting-container">
							<span className="title">Biblia</span>
							<PanelBible />
						</div>
					</TabPane>
				</Tabs>
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
	font-size: 1.2rem;
	padding: 1rem;
	box-sizing: border-box;

	.rc-tabs-nav-list {
		display: flex;
		gap: 0.5rem;
		color: white;
		
		.rc-tabs-tab {
			cursor: pointer;
			border-bottom: 1px solid white;
		}

		.rc-tabs-tab-active {
			border-bottom-color: red;
		}
	}

	.container {
		display: flex;
		flex-direction: column;
	}

	.setting-container {
		.title {
			color: white;
		}
		margin-top: 1rem;
		border-radius: 8px;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background-color: #757575;
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
