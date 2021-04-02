// const proxyHost = 'http://192.168.0.108'
// const proxyHost = 'http://192.168.0.114'
// const proxyHost = 'http://szfarm.com'
// console.log(process.env.NODE_ENV)
module.exports = {
	// 屏幕适配处理
	lintOnSave: false,
	devServer: {
		port: 5203,
		open: false, // 启动打开浏览器
		compress: true, // 开启压缩
		// https: true,
		overlay: {
			warnings: false,
			errors: true
		},
		// proxy: {
		// 	'/api/addressBook': {
		// 		target: `${proxyHost}:9081`, //接口域名
		// 		changeOrigin: true, //是否跨域
		// 		// ws: true, //是否代理 websockets
		// 		// secure: true, //是否https接口
		// 		pathRewrite: { //路径重置
		// 			'^/api/addressBook': '/api/addressBook'
		// 		}
		// 	},
		// 	'/api/worker': {
		// 		target: `${proxyHost}:9082`, //接口域名
		// 		changeOrigin: true, //是否跨域
		// 		// ws: true, //是否代理 websockets
		// 		// secure: true, //是否https接口
		// 		pathRewrite: { //路径重置
		// 			'^/api/worker': '/api/worker'
		// 		}
		// 	}
		// }
	},
	chainWebpack: config => {
		// 设置项目title
		config.plugin('html').tap(args => {
			args[0].title = '三峡农夫后台管理系统'
			return args
		})
	},
}
