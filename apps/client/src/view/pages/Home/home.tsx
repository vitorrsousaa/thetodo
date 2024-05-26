import { Task } from "@/components/task";
import { Button, Icon, ScrollArea } from "@shared/ui";
import { tasks } from "./database";

export function Home() {
	const tasksByCategory = tasks.reduce(
		(acc, task) => {
			if (!acc[task.category]) {
				acc[task.category] = [];
			}
			acc[task.category].push(task);
			return acc;
		},
		{} as Record<string, typeof tasks>,
	);

	return (
		<main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6 max-h-screen overflow-y-hidden">
			<div className="flex items-center ">
				<h2 className="font-semibold text-lg md:text-2xl">Today</h2>
			</div>
			<div className="flex gap-6 overflow-y-hidden ">
				{Object.values(tasksByCategory).map((tasks) => (
					<div key={Math.random()} className="flex flex-col">
						<h3 className="mb-2">
							{tasks[0].category}{" "}
							<span className="text-muted-foreground text-[12px]">
								{tasks.length}
							</span>
						</h3>
						<ScrollArea>
							{tasks.map((task, index) => (
								<Task.Root key={task.id} checked={task.checked} index={index}>
									<Task.Header>{task.title}</Task.Header>
									<Task.Description>{task.description}</Task.Description>
									<Task.Footer endDate={task.end_date} />
								</Task.Root>
							))}
							<Button className="w-full mt-4" variant="ghost">
								<Icon name="plus" className="h-6 w-6" />
								Add a task
							</Button>
						</ScrollArea>
					</div>
				))}
			</div>
		</main>
	);
}
