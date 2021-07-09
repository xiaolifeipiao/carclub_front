/**
@Author: xiaolifeipiao
@Description: localstorage配置
@version: 0.0.0
@Date: 2021-07-09 11:31:59
@LastEditTime: 2021-07-09 15:54:42
@LastEditors: xiaolifeipiao
@FilePath: \src\utils\localStorage.ts
 */
import storage, { StorageType } from '@/utils/storage'
storage.rcSetItem(StorageType.local, STORAGE_KEY, JSON.stringify(todos))
export const getToken = () => localStorage.getItem('token')
export const setToken = (token: string) => localStorage.setItem('token',token)
export const removeToken = () =>localStorage.removeItem('token')
