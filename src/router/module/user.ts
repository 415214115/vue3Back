import Layout from '@/views/layout.vue'
// interface obj {
//     path?: String,
//     name?: String,
//     component?: any,
//     meta?: any,
//     children?: Array<any>,
//     redirect: any
// }
export const users = {
    path: 'users',
    name: 'users',
    // component: () => import('@/views/home/index.vue'),
    component: Layout,
    redirect: '/users/userlist',
    meta: {
        title: '用户管理', 
        icon: 'el-icon-s-home'
    },
    children: [
		{
			path: "userlist",
			name: "userlist",
			component: () => import('@/views/users/index.vue'),
			meta: {
				title: '用户列表',
				icon: ''
			},
            // children: [
            //     {
            //         path: "bannerss",
            //         name: "bannerss",
            //         component: () => import('@/views/home/index.vue'),
            //         meta: {
            //             title: '首页轮播图管理',
            //             icon: ''
            //         }
            //     },
            // ]
		},
	]
}


	


