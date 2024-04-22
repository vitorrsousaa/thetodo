import { log } from "@repo/logger";
import { Button } from "@repo/ui";

export const metadata = {
	title: "Store | Kitchen Sink",
};

export default function Store(): JSX.Element {
	log("Hey! This is the Store page.");

	return (
		<div className="container">
			<h1 className="title">
				Store <br />
				<span>Kitchen Sink</span>
			</h1>
			<Button>
				Button from <code>ui</code> package
			</Button>
			<p className="description">
				Built With <a href="https://turbo.build/repo">Turborepo</a>
				{" & "}
				<a href="https://nextjs.org/">Next.js</a>
			</p>
		</div>
	);
}
