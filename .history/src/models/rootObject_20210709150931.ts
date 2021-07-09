/**
@Author: xiaolifeipiao
@Description: 配置请求root
@version: 0.0.0
@Date: 2021-07-09 15:08:44
@LastEditTime: 2021-07-09 15:09:31
@LastEditors: xiaolifeipiao
@FilePath: \src\models\rootObject.ts
 */

export interface RootObject<T>{
    code: number
    msg: string
    data: T
  }
