/**
@Author: xiaolifeipiao
@Description: 路由配置
@version: 0.0.0
@Date: 2021-07-07 16:52:36
@LastEditTime: 2021-07-16 20:45:46
@LastEditors: xiaolifeipiao
@FilePath: \src\router\index.ts
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


export const constRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
            keepAlive: true,
            navName: '主页'
        }
    },
    // 主页
    {
        path: '/home',
        name: 'Homes',
        component: () => import('../views/Home.vue'),
        meta: {
            keepAlive: true,
            navName: '主页'
        }
    },
    // 车系页
    {
        path: '/brand',
        name: 'BrandCarSeries',
        component: () => import('../views/BrandCarSeries.vue'),
        beforeEnter: (to, from) => {
            // console.log(to, from)
            if (from.fullPath === "/details") {
                to.params.brandId = from.params?.brandId
            }
            return true
        },
        meta: {
            keepAlive: true,
            navName: '品牌页'
        }
    },
    // 测试car360旋转
    {
        path: '/cartest',
        name: 'CarTest',
        component: () => import('../views/CarTest.vue')
    },
    // 车系详情页
    {
        path: '/details',
        name: 'CarDetails',
        component: () => import('../views/CarDetails.vue'),
    },
     // 我的
     {
        path: '/me',
        name: 'Me',
         component: () => import('../views/Mine.vue'),
    },
    //  我的评分
    {
        path: '/score',
        name:'MyScore',
        component:()=>import("../views/MyScore.vue")
    },
     //  我的试驾
     {
        path: '/drive',
        name:'MyDrive',
        component:()=>import("../views/MyDrive.vue")
    },
      // 登录页
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        beforeEnter: (to, from,next) => {
            console.log(to, from)
            if (from.fullPath === "/me") {
                next({path:})
            }
            return true
        },
    },
      // 登录页
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City.vue'),
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constRoutes
})
// 路由前置守卫
router.beforeEach((to:any, from:any, next:any) => {
    next()
})
// 导航后置守卫
router.afterEach(() => {
    // 保证切换路由的时候页面在最顶部
    window.scrollTo({
        top: 0
    })
})

// 重定向router
export function resetRouter() {
    const newRouter = router;
    (router as any).matcher = (newRouter as any).matcher // reset router
}
  
export default router



