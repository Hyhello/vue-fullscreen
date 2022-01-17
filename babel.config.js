module.exports = {
	presets: [
		[
			'@babel/env',
			{
				modules: false,
				targets: {
					browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
				}
			}
		],
		['@vue/babel-preset-jsx']
	],
	plugins: [
		'@babel/plugin-transform-runtime',
		['import', { libraryName: '@hyhello/utils', libraryDirectory: 'lib', camel2DashComponentName: false }]
	],
	env: {
		test: {
			plugins: ['@babel/plugin-transform-modules-commonjs']
		}
	}
};
