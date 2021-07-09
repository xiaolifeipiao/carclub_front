/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2021-07-09 17:11:32
@LastEditTime: 2021-07-09 17:11:43
@LastEditors: xiaolifeipiao
@FilePath: \src\constant\setting.ts
 */
export enum Language{
    En='en',
    Zh='zh-cn',
}

export enum Environment{
   Development = 'development',
   Production = 'production'
}

export enum RouterSource{
   Frontend = 'frontend',
   Backend = 'backend'
}

export enum RouterMode{
   Hash = 'hash',
   HISTORY = 'history'
}

export enum TokenStorageName{
   LocalStorage = 'localStorage',
   SessionStorage = 'sessionStorage',
   Cookie = 'cookie'
}