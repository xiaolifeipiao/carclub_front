/**
@Author: xiaolifeipiao
@Description: 通过ip获取城市
@version: 0.0.0
@Date: 2021-07-15 20:38:10
@LastEditTime: 2021-07-15 20:39:34
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\getCityLocation.ts
 */
import AMapLoader from '@amap/amap-jsapi-loader';
import Keys from '@/constant/key'

AMapLoader.load({
    "key": Keys.gaoDeKey,                                          // 申请好的Web端开发者Key，首次调用 load 时必填
    "version": "1.4.15",                                // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    "plugins": ['AMap.CitySearch'],                                      // 需要使用的的插件列表，如比例尺'AMap.Scale'等
}).then((AMap)=>{
export function showCityInfo() {
    //实例化城市查询类
    var citysearch = new AMap.CitySearch();
    //自动获取用户IP，返回当前城市
    citysearch.getLocalCity(function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
            if (result && result.city) {
                let cityinfo = result.city;
                let res = cityinfo.substr(0,cityinfo.length-1)
                // var citybounds = result.bounds;
                console.log('您当前所在城市：'+res)
                return res
                //地图显示当前城市
                // map.setBounds(citybounds);
            }
        } else {
            console.log(result.info)
        }
    });
}
showCityInfo();
}).catch(e => {
    console.log(e);
})