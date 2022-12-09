// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import requestIp from "request-ip";

export default function handler(req, res) {
	if (!req.body.number) {
		return res.status(500).json({ msg: "Missing Data" });
	}

	if (req.method === "POST") {
		const detectedIp = requestIp.getClientIp(req);
		res
			.status(200)
			.json({
				msg: "Data received",
				number: `${req.body.number}`,
				ip: detectedIp,
			});
	}
}
