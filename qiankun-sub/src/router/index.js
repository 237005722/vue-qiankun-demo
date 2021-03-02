// hash模式需要如此设计子应用的路由
const routes = [
  {
    path: '/qiankun-sub', // 这里是主应用的activeRule
    component: () => import('@/views/Sub.vue'), // 用一个空的页面来包裹子路由，也可以是一个布局页面
    children: [ // 子应用hash模式下，所有的页面路由必须使用子路由的方式
      {
        path: '',
        name: 'qiankun-sub',
        component: () => import('@/views/Home.vue')
      }
    ]
  }
]

export default routes
