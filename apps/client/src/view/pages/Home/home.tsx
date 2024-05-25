import {
	Badge,
	Button,
	Card,
	CardContent,
	Checkbox,
	Input,
	Label,
	Textarea,
} from "@shared/ui";

export function Home() {
	return (
		<main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
			<div className="flex items-center">
				<h2 className="font-semibold text-lg md:text-2xl">Todos</h2>
				<Button className="ml-auto" size="sm">
					Add Todo
				</Button>
			</div>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				<Card>
					<CardContent className="grid gap-4">
						<div className="flex items-center gap-2">
							<Checkbox defaultChecked id="todo-1" />
							<h3 className="font-medium">Finish project proposal</h3>
						</div>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Complete the project proposal for the client meeting next week.
						</p>
						<div className="flex items-center justify-between">
							<span className="text-sm text-gray-500 dark:text-gray-400">
								Due: May 30, 2023
							</span>
							<Badge className="rounded-full px-2 py-1" variant="outline">
								In Progress
							</Badge>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="grid gap-4">
						<div className="flex items-center gap-2">
							<Checkbox id="todo-2" />
							<h3 className="font-medium">Prepare for team meeting</h3>
						</div>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Gather agenda items and review previous meeting notes.
						</p>
						<div className="flex items-center justify-between">
							<span className="text-sm text-gray-500 dark:text-gray-400">
								Due: June 5, 2023
							</span>
							<Badge className="rounded-full px-2 py-1" variant="outline">
								To Do
							</Badge>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="grid gap-4">
						<div className="flex items-center gap-2">
							<Checkbox defaultChecked id="todo-3" />
							<h3 className="font-medium">Review marketing campaign</h3>
						</div>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Analyze the performance of the latest marketing campaign and
							identify areas for improvement.
						</p>
						<div className="flex items-center justify-between">
							<span className="text-sm text-gray-500 dark:text-gray-400">
								Due: June 15, 2023
							</span>
							<Badge className="rounded-full px-2 py-1" variant="outline">
								Completed
							</Badge>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="grid gap-4">
						<div className="flex items-center gap-2">
							<Checkbox id="todo-4" />
							<h3 className="font-medium">Organize team offsite</h3>
						</div>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Plan the logistics and agenda for the upcoming team offsite.
						</p>
						<div className="flex items-center justify-between">
							<span className="text-sm text-gray-500 dark:text-gray-400">
								Due: July 1, 2023
							</span>
							<Badge className="rounded-full px-2 py-1" variant="outline">
								To Do
							</Badge>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="grid gap-4">
						<div className="flex items-center gap-2">
							<Checkbox id="todo-5" />
							<h3 className="font-medium">Finalize quarterly report</h3>
						</div>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Gather data and prepare the quarterly report for the leadership
							team.
						</p>
						<div className="flex items-center justify-between">
							<span className="text-sm text-gray-500 dark:text-gray-400">
								Due: June 30, 2023
							</span>
							<Badge className="rounded-full px-2 py-1" variant="outline">
								In Progress
							</Badge>
						</div>
					</CardContent>
				</Card>
			</div>
			<div className="border shadow-sm rounded-lg p-4">
				<h3 className="font-semibold text-lg mb-4">Add New Todo</h3>
				<form className="grid gap-4">
					<div className="grid gap-2">
						<Label htmlFor="title">Title</Label>
						<Input id="title" placeholder="Enter todo title" type="text" />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="description">Description</Label>
						<Textarea
							id="description"
							placeholder="Enter todo description"
							rows={3}
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="due-date">Due Date</Label>
						<Input id="due-date" type="date" />
					</div>
					<Button className="w-full" type="submit">
						Add Todo
					</Button>
				</form>
			</div>
		</main>
	);
}
