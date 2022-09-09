// IBestAFSRoute[]
export const routes = [
  // {
  //   path: '/filing',
  //   layout: false,
  //   component: 'domain-filing',
  // },
  {
    path: '/zhifangtu',
    layout: false,
    component: 'data-analysis',
  },
  {
    path: '/welcome',
    layout: false,
    component: 'welcome',
  },
  {
    path: '/',
    layout: false,
    component: 'domain-filing',
  },
  {
    path: '/dayjs',
    layout: false,
    component: 'dayjs',
  },
  {
    path: '/auto-identify-link',
    layout: false,
    component: 'auto-identify-link',
  },
  {
    path: '/jotai',
    layout: false,
    component: 'jotai',
  },
  {
    path: '/echarts',
    layout: false,
    component: 'echarts',
  },

  {
    path: '/manage',
    component: '../layouts/manage',
    routes: [
      {
        title: '后台管理',
        exact: true,
        path: '/manage',
        component: 'manage',
      },
      {
        title: '登录',
        exact: true,
        path: '/manage/login',
        component: 'manage/login',
        access: 'managePage',
      },
      {
        title: '文章列表',
        exact: true,
        path: '/manage/article',
        component: 'manage/article',
      },
    ],
  },
  {
    path: '/antd',
    layout: false,
    routes: [
      {
        title: 'message',
        exact: true,
        path: '/antd/message',
        component: 'antd-example/message',
      },
    ],
  },
  // {
  //   path: '/',
  //   redirect: 'index',
  // },
  {
    component: '404',
  },
]

export default routes
