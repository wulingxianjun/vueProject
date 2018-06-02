require.config({
	// baseUrl:'js'


	paths:{
		'swiper':'./swiper.min.js',
		'c_index':'./c_index.js'
	},

	shim:{
		// 设置依赖
		'c_index':['swiper'],
		// 'common':['jquery']
	}
});
