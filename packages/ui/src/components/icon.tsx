"use client";

import {
	ArchiveIcon,
	BellIcon,
	CalendarIcon,
	CardStackIcon,
	ClipboardIcon,
	DragHandleDots2Icon,
	GearIcon,
	HomeIcon,
	IdCardIcon,
	KeyboardIcon,
	LayersIcon,
	MixerHorizontalIcon,
	PersonIcon,
	PlusIcon,
	RocketIcon,
	TrashIcon,
} from "@radix-ui/react-icons";

export interface IconProps {
	name: keyof typeof icons;
	className?: string;
}

const icons = {
	bell: BellIcon,
	calendar: CalendarIcon,
	clipboard: ClipboardIcon,
	home: HomeIcon,
	person: PersonIcon,
	settings: GearIcon,
	trash: TrashIcon,
	layers: LayersIcon,
	archive: ArchiveIcon,
	cardStack: CardStackIcon,
	rocket: RocketIcon,
	idCard: IdCardIcon,
	keyboard: KeyboardIcon,
	plus: PlusIcon,
	drag_handle: DragHandleDots2Icon,
	mixer: MixerHorizontalIcon,
} as const;

export function Icon(props: IconProps) {
	const { name, className } = props;
	const RadixIcon = icons[name];

	return <RadixIcon className={className} />;
}
