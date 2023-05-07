import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	fetch(`${process.env.API}/books/`)
		.then((res) => res.json())
		.then((response) => res.status(200).json(response));
}
