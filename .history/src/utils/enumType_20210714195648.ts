/**
@Author: xiaolifeipiao
@Description: 枚举类型
@version: 0.0.0
@Date: 2021-07-12 20:36:54
@LastEditTime: 2021-07-14 19:56:48
@LastEditors: xiaolifeipiao
@FilePath: \src\utils\enumType.ts
 */
// 
export enum selectCarSeriesType{
    SELECT_ALL, //全选
    SELECT_SALOON_CAR, //轿车
    SELECT_SUV,//SUV
    SELECT_MPV, //SPV
}

export enum selectOperationType{
    TEST_DRIVE = "试驾",
    TO_SCORE = "重新评分",
    SUBMITTED="已提交",
    WAIT_DRIVE = "待试驾",
    FINISH_DRIVE="已试驾"
}