/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2021-07-10 14:21:03
@LastEditTime: 2021-07-10 14:23:42
@LastEditors: xiaolifeipiao
@FilePath: \postcss.config.js
 */
module.exports = {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 375,
      },
      'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
    },
  };