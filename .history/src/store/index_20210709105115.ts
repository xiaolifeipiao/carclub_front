/**
@Author: xiaolifeipiao
@Description: vuex配置
@version: 0.0.0
@Date: 2021-07-08 11:10:48
@LastEditTime: 2021-07-09 10:51:14
@LastEditors: xiaolifeipiao
@FilePath: \src\store\index.ts
 */
import { createStore, createLogger } from "vuex"
import { store as user, UserStore, IUserState } from './modules/user/index'


//定义store各个模块的接口类型
export interface RootState{
  user:IUserState,
}

export type Store = UserStore<Pick<RootState, 'user'>>


// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []
// Plug in session storage based persistence
// plugins.push(createPersistedState({ storage: window.sessionStorage }))

export const store = createStore({
  plugins,
  modules: {
    user
  }
})


export function userStore(): Store{
  return store as Store;
}