/**
@Author: xiaolifeipiao
@Description: 自定义配置
@version: 0.0.0
@Date: 2021-07-09 17:00:52
@LastEditTime: 2021-07-09 17:17:37
@LastEditors: xiaolifeipiao
@FilePath: \src\config\custom\index.ts
 */
import { NetworkConfig } from '../default/net.config'
import { Settings } from '../default/setting.config'

type CustomConfig = NetworkConfig  & Settings

const customConfig: CustomConfig = {
    title: '懂车帝前台',
    version:'0.0.0'
}

export default customConfig