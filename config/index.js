module.exports = {
	__PREFIX__: 'c',
	dev: {
		port: 9527,
		open: true,
		host: 'localhost',
		outputType: 'iife'
	},
	prod: {
		outputDir: 'lib',
		outputTypeList: ['umd', 'cjs', 'esm']
	}
};
