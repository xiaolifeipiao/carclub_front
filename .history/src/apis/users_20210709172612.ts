/**
@Author: xiaolifeipiao
@Description: 用户相关接口
@version: 0.0.0
@Date: 2021-07-09 17:25:34
@LastEditTime: 2021-07-09 17:26:12
@LastEditors: xiaolifeipiao
@FilePath: \src\apis\users.ts
 */
import { RootObject } from '@/models/rootObject'
import { UserInfoModel, Users } from '@/models/userModel'
import https from '@/utils/https'
import { LoginModel } from '@/views/user-manager/login/model/loginModel'
import { RequestParams, ContentType, Method } from 'axios-mapper'

export const loginRequest = (userInfo: RequestParams) => {
  return https(false).request<RootObject<LoginModel>>('user/login', Method.POST, userInfo, ContentType.json)
}

export const userInfoRequest = () => {
  return https().request<RootObject<UserInfoModel>>('user/userInfo', Method.GET, undefined, ContentType.form)
}

export const getUsers = (user: any) => {
  return https().request<RootObject<Users>>('user/getUsers', Method.GET, user, ContentType.form)
}