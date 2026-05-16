
import { Context } from './Context'


class IpGeolocationApi2Error extends Error {

  isIpGeolocationApi2Error = true

  sdk = 'IpGeolocationApi2'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  IpGeolocationApi2Error
}

