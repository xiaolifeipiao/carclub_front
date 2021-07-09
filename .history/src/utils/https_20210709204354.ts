/**
@Author: xiaolifeipiao
@Description: 网络请求封装
@version: 0.0.0
@Date: 2021-07-09 15:59:52
@LastEditTime: 2021-07-09 20:43:54
@LastEditors: xiaolifeipiao
@FilePath: \src\utils\https.ts
 */
import { useStore } from 'vuex'
import HttpClient, { HttpClientConfig } from 'axios-mapper'
import networkConfig from '@/config/default/net.config'
const https = (hasToken: Boolean = true) => {
  const config: HttpClientConfig = {
    baseURL: networkConfig.host,
    headers: {
      token: hasToken ? useStore().state.user.token : ''
    }
  }
  return new HttpClient(config)
}

export default https
