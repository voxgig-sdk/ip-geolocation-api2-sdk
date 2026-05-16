# IpGeolocationApi2 SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

IpGeolocationApi2Utility.registrar = ->(u) {
  u.clean = IpGeolocationApi2Utilities::Clean
  u.done = IpGeolocationApi2Utilities::Done
  u.make_error = IpGeolocationApi2Utilities::MakeError
  u.feature_add = IpGeolocationApi2Utilities::FeatureAdd
  u.feature_hook = IpGeolocationApi2Utilities::FeatureHook
  u.feature_init = IpGeolocationApi2Utilities::FeatureInit
  u.fetcher = IpGeolocationApi2Utilities::Fetcher
  u.make_fetch_def = IpGeolocationApi2Utilities::MakeFetchDef
  u.make_context = IpGeolocationApi2Utilities::MakeContext
  u.make_options = IpGeolocationApi2Utilities::MakeOptions
  u.make_request = IpGeolocationApi2Utilities::MakeRequest
  u.make_response = IpGeolocationApi2Utilities::MakeResponse
  u.make_result = IpGeolocationApi2Utilities::MakeResult
  u.make_point = IpGeolocationApi2Utilities::MakePoint
  u.make_spec = IpGeolocationApi2Utilities::MakeSpec
  u.make_url = IpGeolocationApi2Utilities::MakeUrl
  u.param = IpGeolocationApi2Utilities::Param
  u.prepare_auth = IpGeolocationApi2Utilities::PrepareAuth
  u.prepare_body = IpGeolocationApi2Utilities::PrepareBody
  u.prepare_headers = IpGeolocationApi2Utilities::PrepareHeaders
  u.prepare_method = IpGeolocationApi2Utilities::PrepareMethod
  u.prepare_params = IpGeolocationApi2Utilities::PrepareParams
  u.prepare_path = IpGeolocationApi2Utilities::PreparePath
  u.prepare_query = IpGeolocationApi2Utilities::PrepareQuery
  u.result_basic = IpGeolocationApi2Utilities::ResultBasic
  u.result_body = IpGeolocationApi2Utilities::ResultBody
  u.result_headers = IpGeolocationApi2Utilities::ResultHeaders
  u.transform_request = IpGeolocationApi2Utilities::TransformRequest
  u.transform_response = IpGeolocationApi2Utilities::TransformResponse
}
