import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

let socket: Socket;

const Home = () => {
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
		<div className="panel">
			<div className="container2">
				<div className="setting-container">
					<div className="checkbox-container">
						<label htmlFor="instagram">Instagram</label>
						<input type="checkbox" id="instagram" checked={instagram} onChange={toggleInstagram} />
					</div>
				</div>

				<div className="setting-container">
					<div className="checkbox-container">
						<label htmlFor="info">Information</label>
						<input type="checkbox" id="info" checked={info.active} onChange={toggleInfo} />
					</div>
					<input placeholder="Name" value={info.title} onChange={(e) => setInfo({ ...info, title: e.target.value })} />
					<input
						placeholder="Description"
						value={info.description}
						onChange={(e) => setInfo({ ...info, description: e.target.value })}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
