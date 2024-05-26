import { Task } from "@/components/task";
import { Button, Icon } from "@shared/ui";

export function Inbox() {
	return (
		<main className="p-4 mx-auto flex w-full sm:w-auto">
			<div className="w-full sm:w-[520px] md:w-[710px]">
				<div className="flex items-center ">
					<h2 className="font-semibold text-lg md:text-2xl">Inbox</h2>
				</div>
				<div className="w-full">
					<Task.Root
						index={0}
						checked={false}
						className="w-full border-none pb-3"
					>
						<Task.Header>Task 1</Task.Header>
						<Task.Description>Task 1 description</Task.Description>
					</Task.Root>
					<Task.Root
						index={1}
						checked={false}
						className="w-full border-none pb-3"
					>
						<Task.Header>Task 2</Task.Header>
						<Task.Description>Task 2 description</Task.Description>
					</Task.Root>
					<Button className="w-full mt-4">
						<Icon name="plus" className="mr-2" />
						Add Task
					</Button>
				</div>
			</div>
		</main>
	);
}
