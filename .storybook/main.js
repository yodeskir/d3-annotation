import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	async viteFinal(config) {
		return mergeConfig(config, {
			plugins: [
				tsconfigPaths({
					root: __dirname,
				}),
			],
		});
	},
};

export default config;
