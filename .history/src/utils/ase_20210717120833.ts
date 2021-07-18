/**
@Author: xiaolifeipiao
@Description: aes加密解密
@version: 0.0.0
@Date: 2021-07-09 15:18:50
@LastEditTime: 2021-07-17 12:08:33
@LastEditors: xiaolifeipiao
@FilePath: \src\utils\ase.ts
 */
/*
 *                        .::::.
 *                      .::::::::.
 *                     :::::::::::
 *                  ..:::::::::::'
 *               '::::::::::::'
 *                 .::::::::::
 *            '::::::::::::::..
 *                 ..::::::::::::.
 *               ``::::::::::::::::
 *                ::::``:::::::::'        .:::.
 *               ::::'   ':::::'       .::::::::.
 *             .::::'      ::::     .:::::::'::::.
 *            .:::'       :::::  .:::::::::' ':::::.
 *           .::'        :::::.:::::::::'      ':::::.
 *          .::'         ::::::::::::::'         ``::::.
 *      ...:::           ::::::::::::'              ``::.
 *     ````':.          ':::::::::'                  ::::..
 *                        '.:::::'                    ':'````..
 * 
 * Author       : OBKoro1
 * Date         : 2020-04-30 15:51:08
 * LastEditors  : OBKoro1
 * LastEditTime : 2020-05-13 17:24:47
 * FilePath     : \fileHead\test.js
 * Description  : 
 * https://github.com/OBKoro1
 */

import { AES, mode, pad, enc } from 'crypto-ts'
import Keys from '@/constant/key'

export default class VAES {
  static encrypt(text: string | null): string | null {
    return AES.encrypt(text ?? '', Keys.aseKey, { mode: mode.ECB, padding: pad.PKCS7 }).toString()
  }

  static decrypt(text: string | null): string | null {
    return AES.decrypt(text ?? '', Keys.aseKey, { mode: mode.ECB, padding: pad.PKCS7 }).toString(enc.Utf8)
  }
}
