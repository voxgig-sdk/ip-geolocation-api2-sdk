-- IpGeolocationApi2 SDK error

local IpGeolocationApi2Error = {}
IpGeolocationApi2Error.__index = IpGeolocationApi2Error


function IpGeolocationApi2Error.new(code, msg, ctx)
  local self = setmetatable({}, IpGeolocationApi2Error)
  self.is_sdk_error = true
  self.sdk = "IpGeolocationApi2"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function IpGeolocationApi2Error:error()
  return self.msg
end


function IpGeolocationApi2Error:__tostring()
  return self.msg
end


return IpGeolocationApi2Error
