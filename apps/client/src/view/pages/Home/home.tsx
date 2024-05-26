import {
	Badge,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
	Radio,
	ScrollArea,
	cn,
} from "@shared/ui";
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
			<div className="flex gap-4 overflow-y-hidden ">
				{Object.values(tasksByCategory).map((tasks) => (
					<div key={Math.random()} className="flex flex-col">
						<h1 className="mb-2">{tasks[0].category}</h1>
						<ScrollArea>
							{tasks.map((task, index) => (
								<Card
									key={task.id}
									className={cn(
										"cursor-pointer shadow-sm transition-transform duration-300 ease-in-out transform hover:scale-[1.02] w-72 mt-2",
										task.checked &&
											"opacity-50 cursor-not-allowed hover:scale-100",
									)}
									data-item-index={index}
									aria-disabled={task.checked}
								>
									<CardHeader className="p-3">
										<CardTitle className="flex items-center gap-2">
											<Radio
												id={`task-${index}`}
												defaultChecked={task.checked}
											/>
											<h3
												className={cn(
													"font-medium text-justify overflow-hidden text-ellipsis line-clamp-2",
													task.checked && "line-through",
												)}
											>
												{task.title}
											</h3>
										</CardTitle>
									</CardHeader>
									<CardContent className="grid gap-4 p-3">
										<p
											className={cn(
												"text-sm text-muted-foreground text-justify overflow-hidden text-ellipsis line-clamp-3",
												task.checked && "line-through",
											)}
										>
											{task.description}
										</p>
									</CardContent>
									<CardFooter className="flex items-center justify-between p-3">
										<span
											className={cn(
												"text-sm text-muted-foreground",
												task.checked && "line-through",
											)}
										>
											{new Intl.DateTimeFormat("en-US", {
												dateStyle: "medium",
											}).format(new Date(task.date))}
										</span>
										<Badge className="rounded-full px-2 py-1" variant="outline">
											To Do
										</Badge>
									</CardFooter>
								</Card>
							))}
						</ScrollArea>
					</div>
				))}
			</div>
		</main>
	);
}
