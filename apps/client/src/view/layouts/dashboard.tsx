import { Button, Icon, ToggleTheme, cn } from "@shared/ui";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
	const actived = false;

	return (
		<div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
			<div className="hidden border-r bg-primary-foreground lg:block ">
				<div className="flex h-full max-h-screen flex-col gap-2">
					<div className="flex h-[60px] items-center border-b px-6">
						<a className="flex items-center gap-2 font-semibold" href="/">
							<Icon name="clipboard" className="h-6 w-6" />

							<span className="">thetodo</span>
						</a>
						<Button className="ml-auto h-8 w-8" size="icon" variant="ghost">
							<Icon name="bell" className="h-4 w-4" />
							<span className="sr-only">Toggle notifications</span>
						</Button>
					</div>
					<div className="flex-1 overflow-auto py-2">
						<nav className="grid items-start px-4 text-sm font-medium">
							<a
								className={cn(
									"flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-accent-foreground",
									true && "bg-muted text-accent-foreground",
								)}
								href="/"
							>
								<Icon name="clipboard" className="h-4 w-4" />
								Todos
							</a>
							<a
								className={cn(
									"flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-accent-foreground",
									actived && "bg-muted text-accent-foreground",
								)}
								href="/"
							>
								<Icon name="calendar" className="h-4 w-4" />
								Calendar
							</a>

							<a
								className={cn(
									"flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-accent-foreground",
									actived && "bg-muted text-accent-foreground",
								)}
								href="/"
							>
								<Icon name="settings" className="h-4 w-4" />
								Settings
							</a>
						</nav>
					</div>
				</div>
			</div>
			<div className="flex flex-col">
				<header className="flex h-14 lg:h-[60px] items-center justify-end gap-4 border-b bg-primary-foreground px-6">
					<ToggleTheme />
				</header>
				<Outlet />
			</div>
		</div>
	);
}
