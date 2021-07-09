/**
@Author: xiaolifeipiao
@Description: user模块的action操作
@version: 0.0.0
@Date: 2021-07-09 10:44:26
@LastEditTime: 2021-07-09 15:05:33
@LastEditors: xiaolifeipiao
@FilePath: \src\store\modules\user\action.ts
 */
import { ActionContext, ActionTree } from 'vuex'
import { RootState, userStore } from '../../../store'
import { state, IUserState } from './state'
import { IMutations } from './mutation'
import { UserMutationTypes, UserActionTypes } from './enum_type'
import { resetRouter } from '../../../router/index'
import { removeToken,setToken } from '@/utils/localStorage'
import {} from '@apis/users'

// 增强action
type AugmentedActionContext = {
  commit<K extends keyof IMutations>(key:K,payload:Parameters<IMutations[K]>[1]):ReturnType<IMutations[K]>
} & Omit<ActionContext<IUserState, RootState>, 'commit'>


// 定义actions方法接口
export interface IActions{
  [UserActionTypes.ACTION_LOGIN]({ commit }: AugmentedActionContext, userInfo: { username: string, password: string }): void
  [UserActionTypes.ACTION_RESET_TOKEN]({ commit }: AugmentedActionContext): void
  [UserActionTypes.ACTION_GET_USER_INFO]({ commit }: AugmentedActionContext ): void
  [UserActionTypes.ACTION_LOGIN_OUT]( { commit }: AugmentedActionContext,): void
}

// action具体实现
export const actions: ActionTree<IUserState, RootState> & IActions = {
  async [UserActionTypes.ACTION_LOGIN]({ commit }: AugmentedActionContext, userInfo: { username: string, password: string }) {
    let { username, password } = userInfo;
    username = username.trim();
    await login({ username, password }).then(async (res:any) => {
      if (res?.code == 0 && res.data.accessToken) {
        setToken(res.data.access.Token);
        commit(UserMutationTypes.SET_TOKEN, res.data.accessToken);
      }
    }).catch((err:any) => {
      console.log(err)
    })
  },
  [UserActionTypes.ACTION_RESET_TOKEN](
    { commit }: AugmentedActionContext) {
    removeToken()
    commit(UserMutationTypes.SET_TOKEN, '')
  },
  async [UserActionTypes.ACTION_GET_USER_INFO](
    { commit }: AugmentedActionContext
  ) {
    if (state.token === '') {
      throw Error('token is undefined!')
    }
    await userInfoRequest().then((res:any) => {
      if (res?.code === 0) {
        commit(UserMutationTypes.SET_NAME, res.data.name)
        return res
      } else {
        throw Error('Verification failed, please Login again.')
      }
    })
  },
  [UserActionTypes.ACTION_LOGIN_OUT](
    { commit }: AugmentedActionContext
  ) {
    console.log(commit)
    removeToken()
    commit(UserMutationTypes.SET_TOKEN, '')
    resetRouter()
  }
}
