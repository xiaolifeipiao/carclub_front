/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2021-07-09 11:31:59
@LastEditTime: 2021-07-09 15:03:12
@LastEditors: xiaolifeipiao
@FilePath: \src\utils\localStorage.ts
 */

function isSupportLocalStorage():boolean {
    if (!window.localStorage) {
        return false;
    } else {
        return true;
    }
}


export const getToken = () => localStorage.getItem('token')
export const setToken = (token: string) => localStorage.setItem('token',token)
export const removeToken = () =>localStorage.removeItem('token')
