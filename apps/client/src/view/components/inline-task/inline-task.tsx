import { Icon } from "@shared/ui";
import {
	Description as TaskDescription,
	type TaskDescriptionProps,
	Footer as TaskFooter,
	type TaskFooterProps,
	Header as TaskHeader,
	type TaskHeaderProps,
	Root as TaskRoot,
	type RootProps as TaskRootProps,
} from "../task";

interface InlineTaskRootProps extends Omit<TaskRootProps, "className"> {}

export function Root(props: InlineTaskRootProps) {
	const { children, ...rest } = props;
	return (
		<TaskRoot {...rest} className="w-full border-none pb-3 space-y-2">
			<div className="flex flex-row items-center">
				<Icon name="drag_handle" className="ml-2" />
				<div className="w-full">{children}</div>
			</div>
		</TaskRoot>
	);
}

interface InlineTaskHeaderProps extends TaskHeaderProps {}

export function Header(props: InlineTaskHeaderProps) {
	return <TaskHeader {...props} />;
}

export interface InlineTaskDescriptionProps extends TaskDescriptionProps {}

export function Description(props: InlineTaskDescriptionProps) {
	return <TaskDescription {...props} />;
}

export interface InlineTaskFooterProps extends TaskFooterProps {}

export function Footer(props: InlineTaskFooterProps) {
	return (
		<TaskFooter
			{...props}
			className="w-full justify-between flex items-center gap-2 pb-0 pt-1"
		/>
	);
}

export const InlineTask = {
	Root,
	Header,
	Description,
	Footer,
};
