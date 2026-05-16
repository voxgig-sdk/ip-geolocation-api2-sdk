# IpGeolocationApi2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module IpGeolocationApi2Features
  def self.make_feature(name)
    case name
    when "base"
      IpGeolocationApi2BaseFeature.new
    when "test"
      IpGeolocationApi2TestFeature.new
    else
      IpGeolocationApi2BaseFeature.new
    end
  end
end
