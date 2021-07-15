/**
@Author: xiaolifeipiao
@Description: 工具库
@version: 0.0.0
@Date: 2021-07-11 18:13:26
@LastEditTime: 2021-07-15 12:59:51
@LastEditors: xiaolifeipiao
@FilePath: \src\utils\tool.ts
 */
export const indexList = ['选', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// 我的评分搜索栏
export const rateSelectList = ["全部", "太差", "一般", "可以"]
// 我的试驾搜索栏
export const driveSelectList = ["全部", "已提交", "待试驾", "已试驾"]
// 品牌搜索栏
export const brandSelectList = ["全部", "轿车", "SUV", "MPV"]
// 车系搜索栏
export const seriesSelectList = ["在售", "2020款", "2019款", "2018款"]

// 电话 号码验证
// 手机号校验
export function isPhoneNumber(phoneNum:string):boolean {
    // let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
     /*
     * 移动号码包括的号段：134/135/136/137,138,139；
     * 147/148(物联卡号)；
     * 150/151/152/157/158/159；
     * 165（虚拟运营商）；
     * 1703/1705/1706（虚拟运营商）、178；
     * 182/183/184/187/188
     * 198
    
     * 联通号段包括：130/131
     * 145
     * 155/156
     * 166/167(虚拟运营商)
     * 1704/1707/1708/1709、171
     * 186/186
     *
     * 电信号段包括： 133
     * 153
     * 162(虚拟运营商)
     * 1700/1701/1702(虚拟运营商)
     * 180/181/189
     * 191/199
     * */
    let reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;
    return reg.test(phoneNum);
    }
