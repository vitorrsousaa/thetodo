import { ThemeProvider } from "@shared/ui";
import { Toaster } from "react-hot-toast";
import { Router } from "./router/browser";

function App() {
	return (
		<>
			<ThemeProvider storageKey="thetodo-theme" defaultTheme="dark">
				<Router />

				<Toaster />
			</ThemeProvider>
		</>
	);
}

export default App;
