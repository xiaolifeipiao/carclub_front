/**
@Author: xiaolifeipiao
@Description: user的mutation模块
@version: 0.0.0
@Date: 2021-07-09 10:45:08
@LastEditTime: 2021-07-09 11:06:26
@LastEditors: xiaolifeipiao
@FilePath: \src\store\modules\user\mutation.ts
 */
import { MutationTree } from 'vuex'
import { IUserState } from './state'
import { UserMutationTypes } from './enum_type'

// 定义操作mutations方法接口
export type IMutations<S = IUserState> = {
  // 设置name
  [UserMutationTypes.SET_NAME](state: S, name:string): void
  //设置token
  [UserMutationTypes.SET_TOKEN](state:S,token:string):void
}

// 实现mutations方法接口
export const mutations: MutationTree<IUserState> & IMutations = {
  [UserMutationTypes.SET_NAME](state: IUserState, name: string) {
    state.name = name;
  },
  [UserMutationTypes.SET_TOKEN](state: IUserState, token: string) {
    state.token = token;
  }
}
