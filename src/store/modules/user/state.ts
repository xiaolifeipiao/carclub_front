/**
@Author: xiaolifeipiao
@Description: user的state模块
@version: 0.0.0
@Date: 2021-07-09 10:45:22
@LastEditTime: 2021-07-09 11:00:51
@LastEditors: xiaolifeipiao
@FilePath: \src\store\modules\user\state.ts
 */
// 定义userState接口类型
export interface IUserState{
    isLogin: boolean, //是否登录
    name?: string,//用户名
    id?: string,//用户id
    token?: string,
  }
  
  // 定义userState的状态
  export const state: IUserState = {
    isLogin: false, //是否登录
    name: '',//用户名
    id: '',//用户id
    token: '',
  }
  
  