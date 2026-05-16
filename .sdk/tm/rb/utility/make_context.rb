# IpGeolocationApi2 SDK utility: make_context
require_relative '../core/context'
module IpGeolocationApi2Utilities
  MakeContext = ->(ctxmap, basectx) {
    IpGeolocationApi2Context.new(ctxmap, basectx)
  }
end
