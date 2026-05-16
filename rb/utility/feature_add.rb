# IpGeolocationApi2 SDK utility: feature_add
module IpGeolocationApi2Utilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
