import { defineProject, mergeConfig } from "vitest/config";
// @ts-ignore
import configShared from "@repo/vitest-presets/browser/vitest.config";

export default mergeConfig(
	configShared,
	defineProject({
		test: {
			globals: true,
		},
	}),
);
