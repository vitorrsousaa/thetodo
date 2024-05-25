"use client";

import {
	BellIcon,
	CalendarIcon,
	CaretSortIcon,
	ClipboardIcon,
	CrossCircledIcon,
	DotsHorizontalIcon,
	FileIcon,
	GearIcon,
	GroupIcon,
	HamburgerMenuIcon,
	HomeIcon,
	InstagramLogoIcon,
	LayersIcon,
	PersonIcon,
	PlusCircledIcon,
	TrashIcon,
} from "@radix-ui/react-icons";

interface IconProps {
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
} as const;

export function Icon(props: IconProps) {
	const { name, className } = props;
	const RadixIcon = icons[name];

	return <RadixIcon className={className} />;
}
