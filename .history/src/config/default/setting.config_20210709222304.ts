/**
@Author: xiaolifeipiao
@Description: vue配置
@version: 0.0.0
@Date: 2021-07-09 17:03:26
@LastEditTime: 2021-07-09 22:23:03
@LastEditors: xiaolifeipiao
@FilePath: \src\config\default\setting.config.ts
 */

import { Language, Environment, RouterSource, RouterMode, TokenStorageName } from '@/constant/settings'

export interface Settings{
  //项目中页面显示的名称
  title:string
  //基础url
  baseURL?: string
  // pro版本copyright可随意修改
  copyright?: string
  // 缓存路由的最大数量
  keepAliveMaxNum?: number
  // 路由模式，可选值为 history 或 hash
  routerMode?: RouterMode
  // 不经过token校验的路由
  routesWhiteList?: string[]
  // 加载时显示文字
  loadingText?: string
  // token名称
  tokenName?: string
  // token在localStorage、sessionStorage、cookie存储的key的名称
  tokenTableName?: string
  // token存储位置localStorage sessionStorage cookie
  storage?: TokenStorageName
  // token失效回退到登录页时是否记录本次的路由
  recordRoute?: true
  // 是否显示logo，不显示时设置false，显示时请填写remixIcon图标名称，暂时只支持设置remixIcon
  logo?: string
  // 语言类型zh、en
  i18n?: Language
  // 在哪些环境下显示高亮错误
  errorLog?: Environment
  // 是否开启登录拦截
  loginInterception?: true
  // 是否开启登录RSA加密
  loginRSA?: false
  // fontEnd（前端导出路由）和backEnd（后端导出路由）两种方式
  routerSource?: RouterSource
  // 是否开启roles字段进行角色权限控制（如果是all模式后端完全处理角色并进行json组装，可设置false不处理路由中的roles字段）
  rolesControl?: boolean
  // vertical gallery comprehensive common布局时是否只保持一个子菜单的展开
  uniqueOpened?: boolean
  // 需要加loading层的请求，防止重复提交
  debounce?: string[]
  version: string
}

const settings: Settings = {
  //项目中页面显示的名称
  title:'懂车帝前台',
  //基础url
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // pro版本copyright可随意修改
  copyright: 'zy',
  // 缓存路由的最大数量
  keepAliveMaxNum: 99,
  // 路由模式，可选值为 history 或 hash
  routerMode: RouterMode.Hash,
  // 不经过token校验的路由
  routesWhiteList: [],
  // 加载时显示文字
  loadingText: 'loading',
  // token名称
  tokenName: 'token',
  // token在localStorage、sessionStorage、cookie存储的key的名称
  tokenTableName: 'token',
  // token存储位置localStorage sessionStorage cookie
  storage: TokenStorageName.LocalStorage,
  // token失效回退到登录页时是否记录本次的路由
  recordRoute: true,
  // 是否显示logo，不显示时设置false，显示时请填写remixIcon图标名称，暂时只支持设置remixIcon
  logo: '',
  // 语言类型zh、en
  i18n: Language.Zh,
  // 在哪些环境下显示高亮错误
  errorLog: Environment.Development,
  // 是否开启登录拦截
  loginInterception: true,
  // 是否开启登录RSA加密
  loginRSA: false,
  // fontEnd（前端导出路由）和backEnd（后端导出路由）两种方式
  routerSource: RouterSource.Backend,
  // 是否开启roles字段进行角色权限控制（如果是all模式后端完全处理角色并进行json组装，可设置false不处理路由中的roles字段）
  rolesControl: true,
  // vertical gallery comprehensive common布局时是否只保持一个子菜单的展开
  uniqueOpened: false,
  version: '1.0'
}

export default settings
