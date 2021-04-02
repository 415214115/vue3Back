import Layout from '@/views/layout.vue'
// interface obj {
//     path?: String,
//     name?: String,
//     component?: any,
//     meta?: any,
//     children?: Array<any>,
//     redirect: any
// }
export const homePage = {
    path: 'index',
    name: 'index',
    component: () => import('@/views/home/index.vue'),
    // component: Layout,
    redirect: '',
    meta: {
        title: '首页',
        icon: 'el-icon-s-home'
    },
    // children: [
	// 	{
	// 		path: "banner",
	// 		name: "banner",
	// 		component: Layout,
	// 		meta: {
	// 			title: '首页轮播图管理',
	// 			icon: ''
	// 		},
    //         children: [
    //             {
    //                 path: "bannerss",
    //                 name: "bannerss",
    //                 component: () => import('@/views/home/index.vue'),
    //                 meta: {
    //                     title: '首页轮播图管理',
    //                     icon: ''
    //                 }
    //             },
    //         ]
	// 	},
	// ]
}


	


