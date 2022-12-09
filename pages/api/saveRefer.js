export default function handler(req, res) {
	if (!req.body.number) {
		return res.status(500).json({ msg: "Missing Data" });
	}

	if (req.method === "POST") {
		res.status(200).json({
			msg: "Data received",
			number: `${req.body.number}`,
			link: "/form",
		});
	}
}
