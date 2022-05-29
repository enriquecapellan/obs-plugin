import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	fetch("https://bible-app-demo.herokuapp.com/api/books/")
		.then((res) => res.json())
		.then((response) => res.status(200).json(response));
}
