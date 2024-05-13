import { log } from "..";
import { spyOn } from "@vitest/spy";

spyOn(global.console, "log");

describe("@shared/logger", () => {
	it("prints a message", () => {
		log("hello");
		// eslint-disable-next-line no-console -- testing console
		expect(console.log).toBeCalledWith("LOGGER: ", "hello");
	});
});
