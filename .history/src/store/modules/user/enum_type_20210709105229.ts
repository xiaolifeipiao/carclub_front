/**
@Author: xiaolifeipiao
@Description: user模块的定义操作类型模块
@version: 0.0.0
@Date: 2021-07-09 10:45:41
@LastEditTime: 2021-07-09 10:52:29
@LastEditors: xiaolifeipiao
@FilePath: \src\store\modules\user\enum_type.ts
 */
// userGetter枚举定义
export enum UserGetterTypes{
    GET_COLUMN_BY_ID="GET_COLUMN_BY_ID"
  }
  
  // userMutations枚举定义
  export enum UserMutationTypes{
    SET_TOKEN = 'SET_TOKEN',
    SET_NAME = 'SET_NAME',
  }
  
  
  // userActions枚举定义
  export enum UserActionTypes{
    ACTION_LOGIN = 'ACTION_LOGIN',
    ACTION_RESET_TOKEN = 'ACTION_RESET_TOKEN',
    ACTION_GET_USER_INFO = 'ACTION_GET_USER_INFO',
    ACTION_LOGIN_OUT = 'ACTION_LOGIN_OUT',
  }
  
  