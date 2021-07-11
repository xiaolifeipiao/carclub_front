/**
@Author: xiaolifeipiao
@Description: 主页品牌导航模型
@version: 0.0.0
@Date: 2021-07-10 23:04:01
@LastEditTime: 2021-07-11 17:56:41
@LastEditors: xiaolifeipiao
@FilePath: \src\models\brandModel.ts
 */
export interface brandModel{
    brand_id?: number,
    brand_name?: string,
    image_url?: string
    brand_activity_tag?: string,
    discount_tag?: string,
    pinyin?:string
}
export interface getAllBrandModel{
    type: number
    unique_id: number
    unique_id_str: string
    info:brandModel
}
