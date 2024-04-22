import { Toaster } from "react-hot-toast";
import { Router } from "./router/browser";

function App() {
	return (
		<>
			<Router />

			<Toaster />
		</>
	);
}

export default App;
