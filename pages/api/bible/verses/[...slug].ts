import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { slug } = req.query;

	fetch(`https://bible-app-demo.herokuapp.com/api/books/${slug[0]}/verses/${slug[1]}`)
		.then((res) => res.json())
		.then((response) => res.status(200).json(response));
}