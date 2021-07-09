/**
@Author: xiaolifeipiao
@Description: localstorage配置
@version: 0.0.0
@Date: 2021-07-09 11:31:59
@LastEditTime: 2021-07-09 15:58:24
@LastEditors: xiaolifeipiao
@FilePath: \src\utils\localStorage.ts
 */
import storage, { StorageType } from '@/utils/storage'
// 设置存储的key值
const STORAGE_KEY = 'token'

// 获取token值
export const getToken = () => storage.rcGetItem(StorageType.local, STORAGE_KEY)
// 设置加密的
export const setToken = (token: string) =>storage.rcSetItem(StorageType.local, STORAGE_KEY, token)
export const removeToken = () =>storage.rcRemoveItem(StorageType.local,STORAGE_KEY)
