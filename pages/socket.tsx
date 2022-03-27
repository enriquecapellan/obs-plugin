import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import styled from 'styled-components'

let socket: Socket;

const Home = () => {

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
	};

	return (
		<Wrapper>
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
					<input placeholder="Name" value={info.title} onChange={(e) => setInfo({ ...info, title: e.target.value })} />
					<input placeholder="Description" value={info.description} onChange={(e) => setInfo({ ...info, description: e.target.value })} />
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
		</Wrapper>
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
