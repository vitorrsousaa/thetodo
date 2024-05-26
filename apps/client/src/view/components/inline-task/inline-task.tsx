import { Icon } from "@shared/ui";
import {
	Description as TaskDescription,
	type TaskDescriptionProps,
	Header as TaskHeader,
	type TaskHeaderProps,
	Root as TaskRoot,
	type RootProps as TaskRootProps,
} from "../task";

interface InlineTaskRootProps extends Omit<TaskRootProps, "className"> {}

export function Root(props: InlineTaskRootProps) {
	const { children, ...rest } = props;
	return (
		<TaskRoot {...rest} className="w-full border-none pb-3">
			<div className="flex flex-row items-center gap">
				<Icon name="drag_handle" className="ml-2" />
				<div>{children}</div>
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

export const InlineTask = {
	Root,
	Header,
	Description,
};
