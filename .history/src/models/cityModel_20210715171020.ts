/**
@Author: xiaolifeipiao
@Description: 城市数据列表
@version: 0.0.0
@Date: 2021-07-15 17:07:04
@LastEditTime: 2021-07-15 17:10:20
@LastEditors: xiaolifeipiao
@FilePath: \src\models\cityModel.ts
 */
export interface cityModel{
    initials: string,
    city:Array<city>
}
export interface city{
    city_name: string,
    initials: string
}