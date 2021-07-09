/**
@Author: xiaolifeipiao
@Description: 网络请求封装
@version: 0.0.0
@Date: 2021-07-09 15:59:52
@LastEditTime: 2021-07-10 02:46:09
@LastEditors: xiaolifeipiao
@FilePath: \src\utils\https.ts
 */
import { useStore } from 'vuex'
import HttpClient, { HttpClientConfig } from 'axios-mapper'
import networkConfig from '@/config/default/net.config'
// console.log(import.meta.env.VITE_APP_BASE_API);

const https = (hasToken: Boolean = true) => {
  const config: HttpClientConfig = {
    baseURL: '',
    headers: {
      token: hasToken ? useStore().state.user.token : ''
    }
  }
  return new HttpClient(config)
}

export default https
