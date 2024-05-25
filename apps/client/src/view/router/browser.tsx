import { Home } from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "../layouts/dashboard";

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<>Error page</>} />
				<Route element={<DashboardLayout />}>
					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
