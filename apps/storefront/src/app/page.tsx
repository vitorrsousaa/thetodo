import { log } from "@shared/logger";
import { Button } from "@shared/ui";

export const metadata = {
	title: "Store | Kitchen Sink",
};

const buttonVariants = [
	"default",
	"destructive",
	"outline",
	"secondary",
	"ghost",
	"link",
] as const;

export default function Store(): JSX.Element {
	log("Hey! This is the Store page.");

	return (
		<div className="mt-8 items-center space-y-4">
			<div className="flex w-full justify-center text-3xl font-bold">
				Welcome to Next
			</div>
			<div className="flex w-full justify-center space-x-4">
				<ul className="items-center space-y-1 md:inline-flex md:space-x-1 md:space-y-0">
					{buttonVariants.map((variant) => (
						<li key={variant}>
							<Button variant={variant} className="capitalize">
								{variant}
							</Button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
