import { Server } from "socket.io";

const SocketHandler = (req: any, res: any) => {
	if (!res.socket.server.io) {
		console.log("Socket is initializing");
		const io = new Server(res.socket.server);
		res.socket.server.io = io;

		io.on("connection", (socket) => {
			socket.on("set-instagram", (msg) => {
				socket.broadcast.emit("set-instagram", msg);
			});

			socket.on("set-info", (msg) => {
				socket.broadcast.emit("set-info", msg);
			});
			
			socket.on("set-verse", (msg) => {
				socket.broadcast.emit("set-verse", msg);
			});
		});
	}
	res.end();
};

export default SocketHandler;
