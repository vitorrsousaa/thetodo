// @ts-ignore
import configShared from "@repo/vitest-presets/node/vitest.config";
import { defineProject, mergeConfig } from "vitest/config";

export default mergeConfig(
	configShared,
	defineProject({
		test: {
			globals: true,
		},
	}),
);
