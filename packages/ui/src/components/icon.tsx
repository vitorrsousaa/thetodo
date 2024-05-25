"use client";

import {
	ArchiveIcon,
	BellIcon,
	CalendarIcon,
	CardStackIcon,
	ClipboardIcon,
	GearIcon,
	HomeIcon,
	IdCardIcon,
	KeyboardIcon,
	LayersIcon,
	PersonIcon,
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
} as const;

export function Icon(props: IconProps) {
	const { name, className } = props;
	const RadixIcon = icons[name];

	return <RadixIcon className={className} />;
}
