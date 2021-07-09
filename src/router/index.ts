/**
@Author: xiaolifeipiao
@Description: 路由配置
@version: 0.0.0
@Date: 2021-07-07 16:52:36
@LastEditTime: 2021-07-09 11:12:53
@LastEditors: xiaolifeipiao
@FilePath: \src\router\index.ts
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


export const constRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'AllPartyMember',
        component: () => import('../views/BranchManagement/AllMember/AllPartyMember.vue'),
        meta: {
            keepAlive: true,
            navName: '党务工作'
        }
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constRoutes
})
// 路由前置守卫
router.beforeEach((to, from, next) => {
    next()
})
// 导航后置守卫
router.afterEach(() => {
    // 保证切换路由的时候页面在最顶部
    // window.scrollTo({
    //     top: 0
    // })
})

// 重定向router
export function resetRouter() {
    const newRouter = router;
    (router as any).matcher = (newRouter as any).matcher // reset router
}
  
export default router



