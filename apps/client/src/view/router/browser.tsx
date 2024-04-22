import { Home } from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<>Error page</>} />
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
