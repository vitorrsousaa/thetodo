import { ROUTES } from "@/config/routes";
import { Home } from "@/pages/Home";
import { Inbox } from "@/pages/Inbox";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "../layouts/dashboard";

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<>Error page</>} />
				<Route element={<DashboardLayout />}>
					<Route path={ROUTES.HOME} element={<Home />} />
					<Route path={ROUTES.INBOX} element={<Inbox />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
