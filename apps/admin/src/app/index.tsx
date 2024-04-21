import React from "react";
import "./styles.css";
import { Button } from "@repo/ui";

function App(): JSX.Element {
	return (
		<div className="container">
			<h1 className="title">
				Admin <br />
				<span>Kitchen Sink aaa</span>
			</h1>
			<Button>
				Button from <code>ui</code> package
			</Button>
			<p className="description">
				Built With <a href="https://turbo.build/repo">Turborepo</a>
				{" & "}
				<a href="https://vitejs.dev/">Vite</a>
			</p>
		</div>
	);
}

export default App;
