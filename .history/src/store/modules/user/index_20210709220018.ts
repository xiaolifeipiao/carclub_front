/**
@Author: xiaolifeipiao
@Description: user输出模块
@version: 0.0.0
@Date: 2021-07-09 10:44:02
@LastEditTime: 2021-07-09 22:00:17
@LastEditors: xiaolifeipiao
@FilePath: \src\store\modules\user\index.ts
 */
import { Store as VuexStore, CommitOptions, DispatchOptions, Module } from 'vuex'
import { RootState } from '../../../store'
import {state} from './state'
import { mutations, IMutations } from './mutation';
import { actions, IActions } from './action'
import type { IUserState } from './state'

export { IUserState }

export type UserStore<S = IUserState> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'> & {
  commit<K extends keyof IMutations, P extends Parameters<IMutations[K]>[1]>(key:K,payload:P,options?:CommitOptions):ReturnType<IMutations[K]>
} & {
  dispatch<K extends keyof IActions>(
    key: K,
    payload: Parameters<IActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<IActions[K]>
};

export const store: Module<IUserState, RootState> = {
  state,
  mutations,
  actions,
   // TODO: With namespaced option turned on, having problem how to use dispatch with action types...
  // But without it, a bigger store might have clashes in namings
  // namespaced: true,
}
