/**
@Author: xiaolifeipiao
@Description: aes加密解密
@version: 0.0.0
@Date: 2021-07-09 15:18:50
@LastEditTime: 2021-07-17 12:10:56
@LastEditors: xiaolifeipiao
@FilePath: \src\utils\ase.ts
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
