/**
@Author: xiaolifeipiao
@Description: 网络配置
@version: 0.0.0
@Date: 2021-07-09 17:02:55
@LastEditTime: 2021-07-09 17:04:29
@LastEditors: xiaolifeipiao
@FilePath: \src\config\default\net.config.ts
 */
import { ContentType, Device } from '@/constant/headers'
import { InfoShowType } from '@/constant/network'
import settings from "./setting.config";
interface Headers{
    token: string
    contentType: string
    version: string
    device: Device
}

const _header: Headers = {
  token: '',
  contentType: ContentType.JSON,
  version: settings.version ?? '1.0',
  device: Device.PC
}

export interface NetworkConfig{
    host?: string
    timeout?: number
    loading?: false
    errorShowType?: InfoShowType
    header?: {}
}

const networkConfig: NetworkConfig = {
  host: process.env.VUE_APP_BASE_API,
  timeout: 10000,
  loading: false,
  errorShowType: InfoShowType.LOG,
  header: _header
}

export default networkConfig
