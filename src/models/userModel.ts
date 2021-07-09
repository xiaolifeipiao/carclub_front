/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2021-07-09 17:26:18
@LastEditTime: 2021-07-09 17:26:41
@LastEditors: xiaolifeipiao
@FilePath: \src\models\userModel.ts
 */
export interface UserInfoModel {
    id: number
    username: string
    password: string
    name: string
    avatar: string
    introduction: string
    email: string
    phone: string
    roles: string[]
  }
  
  export interface Users {
    items: any
  }