import { render } from "@testing-library/react";
import { Description, Footer, Header, Root } from "./task";

describe("Task", () => {
	describe("root", () => {
		it("should render root component with correct children when children is defined", () => {
			// Arrange

			// Act
			const rendered = render(
				<Root index={2} checked>
					children
				</Root>,
			);

			// Assert
			expect(rendered.getByText("children"));
		});
	});

	describe("header", () => {
		it("should render radio with `task-2` as id when root is rendered with index-2", () => {
			// Arrange

			// Act
			const rendered = render(
				<Root index={2} checked>
					<Header>children</Header>
				</Root>,
			);

			// Assert
			expect(rendered.getByRole("checkbox").getAttribute("id")).toBe("task-2");
		});
		it("should render header component with correct children when children is defined", () => {
			// Arrange

			// Act
			const rendered = render(
				<Root index={2} checked>
					<Header>children</Header>
				</Root>,
			);

			// Assert
			expect(rendered.getByText("children"));
		});
	});

	describe("description", () => {
		it("should render description component with correct children when children is defined", () => {
			// Arrange

			// Act
			const rendered = render(
				<Root index={2} checked>
					<Description>children</Description>
				</Root>,
			);

			// Assert
			expect(rendered.getByText("children"));
		});
	});

	describe("footer", () => {
		it("should render footer component with correct children when children is defined", () => {
			// Arrange

			// Act
			const rendered = render(
				<Root index={2} checked>
					<Footer endDate={"2022-12-12"} />
				</Root>,
			);

			// Assert
			expect(rendered.getByText("Dec 11, 2022"));
		});
	});
});
