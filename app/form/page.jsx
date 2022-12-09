"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";

/* async function saveFormData(data) {
	return await fetch("/api/saveForm", {
		body: JSON.stringify(data),
		headers: { "Content-Type": "application/json" },
		method: "POST",
	});
}
*/

export default function form() {
	const [number, setNumber] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		/* await saveFormData({ number: number }); */
		const res = await fetch("/api/saveForm", {
			body: JSON.stringify({
				number: e.target.paytm.value,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		const result = await res.json();
		console.log(result);
		setNumber("");
	};
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>
					<a href="https://crazycampainlooters.in">Campaign Looters </a>
				</h1>

				<div className={styles.input}>
					<form onSubmit={handleSubmit} className={styles.form}>
						<input
							name="paytm"
							id="paytm"
							placeholder="Enter Your Paytm No."
							value={number}
							onChange={(e) => setNumber(e.target.value)}
							type="text"
							maxLength={10}
						/>
						<input
							name="paytmSubmit"
							id={styles.paytmSubmit}
							type="submit"
							value="Submit"
						/>
					</form>
					<h2>
						Complete The Offer to Get Instant Cashback{" "}
						{/* <code className={styles.code}>app/page.tsx</code> */}
					</h2>
				</div>

				<div className={styles.grid}>
					<div className={styles.card}>
						{/* <h2>Rules &rarr;</h2> */}
						<h2>Rules</h2>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
					<div className={styles.card}>
						{/* <h2>Rules &rarr;</h2> */}
						<h2>Warning</h2>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>

					{/* <a
						href="https://github.com/vercel/next.js/tree/canary/examples"
						className={styles.card}>
						<h2>Examples &rarr;</h2>
						<p>Explore the Next.js 13 playground.</p>
					</a>

					<a
						href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.card}>
						<h2>Deploy &rarr;</h2>
						<p>Deploy your Next.js site to a public URL with Vercel.</p>
					</a> */}
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					Powered by{" "}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}
