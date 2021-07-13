/**
@Author: xiaolifeipiao
@Description: 车系模型
@version: 0.0.0
@Date: 2021-07-12 10:42:21
@LastEditTime: 2021-07-12 15:52:27
@LastEditors: xiaolifeipiao
@FilePath: \src\models\carSeriesModel.ts
 */
export interface carSeriesModel{
    id:number,
    brand_id:number,
    outter_name?: string, //车系名
    brand_name?:string, //品牌名
    dealer_price?: number, //指导价格
    dcar_score?: number, //指导评分
    cover_url?: string, //封面图片
    my_score?: number, //我的评分
    all_score?:number, //综合评分 
}

// "series_status_tag": null,
// "count": 17,
// "outter_name": "奥迪A4L",
// "dealer_max_price": "35.44",
// "cover_url": "https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png",
// "max_price": 39.68,
// "brand_id": 2,
// "brand_name": "奥迪",
// "min_price": 30.58,
// "sub_brand_id": 20,
// "dealer_price": "26.30-35.44万",
// "dealer_min_price": "26.30",
// "car_ids": [
//     42238,
//     43992,
//     43993,
//     43994,
//     43995,
//     43996,
//     43997,
//     43998,
//     43999,
//     54112,
//     54760,
//     54761,
//     54762,
//     54763,
//     54764,
//     54765,
//     54766
// ],
// "business_status": 0,
// "id": 96,
// "concern_id": 96,
// "new_car_tag": 0,
// "car_list_open_url": "",
// "dcar_score": 4.08,
// "dcar_score_url": ""