import { noop, current } from './utils'
import * as apis from './apis'
const deviceInfo = require('@ohos.deviceInfo')

export function initNativeApi (taro) {
  current.taro = taro
  taro.initPxTransform = noop
  taro.apiSdkVersion = deviceInfo.sdkApiVersion
  Object.defineProperty(taro, 'getApp', {
    configurable: true,
    enumerable: true,
    get () {
      return globalThis.getApp
    }
  })
  Object.assign(taro, apis)
}
