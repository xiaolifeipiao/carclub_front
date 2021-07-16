/**
@Author: xiaolifeipiao
@Description: 通过ip获取城市
@version: 0.0.0
@Date: 2021-07-15 20:38:10
@LastEditTime: 2021-07-15 20:52:38
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\getCityLocation.ts
 */
import AMapLoader from '@amap/amap-jsapi-loader';
import Keys from '@/constant/key'

const AM = AMapLoader.load({
    "key": Keys.gaoDeKey,                                                     // 申请好的Web端开发者Key，首次调用 load 时必填
    "version": "1.4.15",                                                          // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    "plugins": ['AMap.CitySearch'],                                      // 需要使用的的插件列表，如比例尺'AMap.Scale'等
})

export function showCityInfo() {
    return  AM.then(AMap => {
            var citysearch = new AMap.CitySearch();
            citysearch.getLocalCity(function (status: any, result: any) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city) {
                        let cityinfo = result.city;
                        let res = cityinfo.substr(0, cityinfo.length - 1)
                        // var citybounds = result.bounds;
                        console.log('您当前所在城市：' + res)
                        return res
                        //地图显示当前城市
                        // map.setBounds(citybounds);
                    }
                } else {
                    console.log(result.info)
                }
            });
        })
    }