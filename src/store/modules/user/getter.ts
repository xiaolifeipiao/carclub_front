/**
@Author: xiaolifeipiao
@Description: user模块的getter操作
@version: 0.0.0
@Date: 2021-07-09 10:44:50
@LastEditTime: 2021-07-09 11:05:35
@LastEditors: xiaolifeipiao
@FilePath: \src\store\modules\user\getter.ts
 */
import { GetterTree } from 'vuex'
import { IUserState } from './state'
import {RootState} from '../../../store/index'
import { UserGetterTypes } from './enum_type'

// 定义getters的接口
export type IGetters<S = IUserState> = {
  //获用户id
 [UserGetterTypes.GET_USER_ID](state:S):string
}

// 实现方法接口
export const getter: GetterTree<IUserState, RootState> & IGetters = {
  [UserGetterTypes.GET_USER_ID](state: IUserState):string {
    return state.id ?? ' ';
  }
}

