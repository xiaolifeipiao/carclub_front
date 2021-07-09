/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2021-07-09 17:18:04
@LastEditTime: 2021-07-09 17:18:35
@LastEditors: xiaolifeipiao
@FilePath: \src\config\index.ts
 */
// 默认配置
import {  netConfig, settingConfig } from './default'
// 自定义配置
import customConfig from './custom'

// 导出配置（自定义配置优先级高）
export default Object.assign({}, netConfig, settingConfig, customConfig)