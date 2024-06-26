import {
	Badge,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
	Icon,
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

export interface RootProps {
	index: number;
	checked: boolean;
	children: ReactNode;
	className?: string;
}

export function Root(props: RootProps) {
	const { index, checked, children, className } = props;

	return (
		<TaskContext.Provider value={{ checked, index }}>
			<Card
				data-item-index={index}
				aria-disabled={checked}
				className={cn(
					"cursor-pointer shadow-sm transition-transform duration-300 ease-in-out transform  w-72 mt-2 bg-secondary/20",
					checked && "opacity-50 cursor-not-allowed",
					className,
				)}
			>
				{children}
			</Card>
		</TaskContext.Provider>
	);
}

export interface TaskHeaderProps {
	children: string;
}

export function Header(props: TaskHeaderProps) {
	const { children } = props;
	const { checked, index } = useTask();

	return (
		<CardHeader className="p-3">
			<CardTitle className="flex items-center gap-2">
				<Radio id={`task-${index}`} defaultChecked={checked} />
				<p
					className={cn(
						"font-medium text-justify overflow-hidden text-ellipsis line-clamp-2",
						checked && "line-through",
					)}
				>
					{children}
				</p>
			</CardTitle>
		</CardHeader>
	);
}

export interface TaskDescriptionProps {
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

export interface TaskFooterProps {
	endDate: string;
	className?: string;
}

export function Footer(props: TaskFooterProps) {
	const { endDate, className } = props;
	const { checked } = useTask();
	const isToday =
		new Date(endDate).toDateString() === new Date().toDateString();
	const isPast = new Date(endDate) < new Date();
	const formatedDate = new Intl.DateTimeFormat("en-US", {
		dateStyle: "medium",
	}).format(new Date(endDate));

	return (
		<CardFooter
			className={cn("flex items-center justify-between p-3", className)}
		>
			<span
				className={cn(
					"text-[12px] flex items-center gap-1 text-muted-foreground",
					checked && "line-through",
					isToday ? "text-green-600" : isPast && "text-red-500",
				)}
			>
				<Icon name="calendar" />
				{isToday ? "Today" : formatedDate}
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
