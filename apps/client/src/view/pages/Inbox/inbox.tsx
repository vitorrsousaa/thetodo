import { InlineTask } from "@/components/inline-task";
import { Button, Icon } from "@shared/ui";

export function Inbox() {
	return (
		<main className="p-4 mx-auto flex w-full sm:w-auto">
			<div className="w-full sm:w-[520px] md:w-[710px]">
				<div className="flex items-center ">
					<h2 className="font-semibold text-lg md:text-2xl">Inbox</h2>
				</div>
				<div className="w-full">
					<InlineTask.Root index={0} checked={false}>
						<InlineTask.Header>Task 1</InlineTask.Header>
						<InlineTask.Description>Task 1 description</InlineTask.Description>
					</InlineTask.Root>

					<Button className="w-full mt-4">
						<Icon name="plus" className="mr-2" />
						Add Task
					</Button>
				</div>
			</div>
		</main>
	);
}
