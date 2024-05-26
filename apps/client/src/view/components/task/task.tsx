import {
	Badge,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
	Radio,
	cn,
} from "@shared/ui";
import React, { type ReactNode } from "react";

interface TaskContextValue {
	checked: boolean;
	index: number;
}

const TaskContext = React.createContext<TaskContextValue>(
	{} as TaskContextValue,
);

function useTask() {
	const taskContext = React.useContext(TaskContext);

	if (!taskContext) {
		throw new Error("useTask should be used within <TaskContext>");
	}

	return taskContext;
}

interface TaskProps {
	index: number;
	checked: boolean;
	children: ReactNode;
}

export function Root(props: TaskProps) {
	const { index, checked, children } = props;
	return (
		<TaskContext.Provider value={{ checked, index }}>
			<Card
				data-item-index={index}
				aria-disabled={checked}
				className={cn(
					"cursor-pointer shadow-sm transition-transform duration-300 ease-in-out transform  w-72 mt-2 bg-secondary/20",
					checked && "opacity-50 cursor-not-allowed",
				)}
			>
				{children}
			</Card>
		</TaskContext.Provider>
	);
}

interface TaskHeaderProps {
	children: string;
}

export function Header(props: TaskHeaderProps) {
	const { children } = props;
	const { checked, index } = useTask();

	return (
		<CardHeader className="p-3">
			<CardTitle className="flex items-center gap-2">
				<Radio id={`task-${index}`} defaultChecked={checked} />
				<h3
					className={cn(
						"font-medium text-justify overflow-hidden text-ellipsis line-clamp-2",
						checked && "line-through",
					)}
				>
					{children}
				</h3>
			</CardTitle>
		</CardHeader>
	);
}

interface TaskDescriptionProps {
	children: string;
}

export function Description(props: TaskDescriptionProps) {
	const { children } = props;
	const { checked } = useTask();

	return (
		<CardContent className="px-3 py-0">
			<p
				className={cn(
					"text-[12px] text-muted-foreground text-justify overflow-hidden text-ellipsis line-clamp-2",
					checked && "line-through",
				)}
			>
				{children}
			</p>
		</CardContent>
	);
}

interface TaskFooterProps {
	endDate: string;
}

export function Footer(props: TaskFooterProps) {
	const { endDate } = props;
	const { checked } = useTask();

	return (
		<CardFooter className="flex items-center justify-between p-3">
			<span
				className={cn(
					"text-[12px] text-muted-foreground",
					checked && "line-through",
				)}
			>
				{new Intl.DateTimeFormat("en-US", {
					dateStyle: "medium",
				}).format(new Date(endDate))}
			</span>
			<Badge className="rounded-full px-2 py-1" variant="outline">
				To Do
			</Badge>
		</CardFooter>
	);
}

export const Task = {
	Root,
	Header,
	Description,
	Footer,
};
