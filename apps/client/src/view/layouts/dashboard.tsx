import { ROUTES } from "@/config/routes";
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
	Icon,
	type IconProps,
	ToggleTheme,
	cn,
} from "@shared/ui";
import { Outlet, useLocation } from "react-router-dom";

const sideItems: { name: string; icon: IconProps["name"]; href: string }[] = [
	{
		name: "Inbox",
		icon: "archive",
		href: ROUTES.INBOX,
	},
	{
		name: "Today",
		icon: "calendar",
		href: ROUTES.HOME,
	},
	{
		name: "Upcoming",
		icon: "cardStack",
		href: "/",
	},
];

function Dropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost">
					<Icon name="person" />
					<span className="sr-only">Open user menu</span>
					<span className="text-sm ">Jane Doe</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-72">
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<div className="flex items-center gap-2">
							<Icon name="rocket" />
							Productivity
						</div>
						<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<div className="flex items-center gap-2">
							<Icon name="idCard" />
							Billing
						</div>
						<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<div className="flex items-center gap-2">
							<Icon name="settings" />
							Settings
						</div>
						<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<div className="flex items-center gap-2">
							<Icon name="keyboard" />
							Keyboard shortcuts
						</div>
						<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>Team</DropdownMenuItem>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem>Email</DropdownMenuItem>
								<DropdownMenuItem>Message</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>More...</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
					<DropdownMenuItem>
						New Team
						<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>GitHub</DropdownMenuItem>
				<DropdownMenuItem>Support</DropdownMenuItem>
				<DropdownMenuItem disabled>API</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					Log out
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export function DashboardLayout() {
	const { pathname } = useLocation();
	return (
		<div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
			<div className="hidden border-r bg-primary-foreground lg:block ">
				<div className="flex h-full max-h-screen flex-col gap-2">
					<div className="flex h-[60px] items-center border-b px-6">
						<Dropdown />
						<Button className="ml-auto h-8 w-8" size="icon" variant="ghost">
							<Icon name="bell" className="h-4 w-4" />
							<span className="sr-only">Toggle notifications</span>
						</Button>
					</div>
					<div className="flex-1 overflow-auto py-2">
						<nav className="grid items-start px-4 text-sm font-medium">
							<Button variant={"default"} className="justify-start gap-2 mb-4">
								<Icon name="plus" className="h-6 w-6" />
								Add a task
							</Button>
							{sideItems.map((item) => {
								const actived = item.href === pathname;

								return (
									<a
										key={item.name}
										className={cn(
											"flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-accent-foreground",
											actived && "bg-muted text-accent-foreground",
										)}
										href={item.href}
									>
										<Icon name={item.icon} className="h-4 w-4" />
										{item.name}
									</a>
								);
							})}
						</nav>
					</div>
				</div>
			</div>
			<div className="flex flex-col max-h-screen overflow-y-hidden">
				<header className="flex h-14 lg:h-[60px] items-center justify-end gap-4 border-b bg-primary-foreground px-6">
					<Button variant={"ghost"} className="h-8 w-8" size="icon">
						<Icon name="mixer" className="h-4 w-4" />
					</Button>
					<ToggleTheme />
				</header>
				<Outlet />
			</div>
		</div>
	);
}
