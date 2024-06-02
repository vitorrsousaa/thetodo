import { tasks } from "../Home/database";

const labels = {
	old: "Overdue",
	today: "Today",
	tomorrow: "Tomorrow",
	next_week: "Next Week",
	next_month: "Next Month",
	later: "Later",
};

export function Upcoming() {
	const tasksOfCurrentWeek = tasks.filter((task) => {
		const today = new Date();
		const end_date = new Date(task.end_date);
		console.log(end_date);

		const beginOfWeek = new Date(
			today.setDate(today.getDate() - today.getDay()),
		);
		const endOfWeek = new Date(beginOfWeek);
		endOfWeek.setDate(endOfWeek.getDate() + 6);

		return end_date >= today && end_date <= endOfWeek;
		// return end_date <= endOfWeek;
	});

	const upcomingTasks = tasksOfCurrentWeek.reduce(
		(acc, task) => {
			const formatedDate = new Intl.DateTimeFormat("en-US", {
				dateStyle: "medium",
			}).format(new Date(task.end_date));
			const dayOfWeek = new Intl.DateTimeFormat("en-US", {
				weekday: "long",
			}).format(new Date(task.end_date));

			const today = new Date();

			const isToday =
				new Date(task.end_date).toDateString() === today.toDateString();

			const isPast = new Date(task.end_date) < today;

			const currentDate = isToday
				? `${formatedDate} | ${labels.today}`
				: isPast
					? `${labels.old}`
					: `${formatedDate} | ${dayOfWeek}`;

			if (!acc[currentDate]) {
				acc[currentDate] = [];
			}

			acc[currentDate].push(task);
			return acc;
		},
		{} as Record<string, typeof tasks>,
	);

	const ordenedUpcoming = Object.keys(upcomingTasks).sort((a, b) => {
		const aDate = new Date(a.split("|")[0]);
		const bDate = new Date(b.split("|")[0]);

		return aDate > bDate ? 1 : -1;
	});

	return (
		<main className="p-4 px-8">
			<div className="w-full sm:w-[520px] md:w-[710px]">
				<div className="flex items-center ">
					<h2 className="font-semibold text-lg md:text-2xl">Upcoming</h2>
				</div>
				<div className="w-full">
					<span className="text-muted-foreground">
						this page will be constructed
					</span>
				</div>
			</div>
		</main>
	);
}
