# IpGeolocationApi2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module IpGeolocationApi2Features
  def self.make_feature(name)
    case name
    when "base"
      IpGeolocationApi2BaseFeature.new
    when "ratelimit"
      IpGeolocationApi2RatelimitFeature.new
    when "retry"
      IpGeolocationApi2RetryFeature.new
    when "test"
      IpGeolocationApi2TestFeature.new
    when "timeout"
      IpGeolocationApi2TimeoutFeature.new
    else
      IpGeolocationApi2BaseFeature.new
    end
  end
end
