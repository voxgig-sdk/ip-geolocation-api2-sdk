<?php
declare(strict_types=1);

// IpGeolocationApi2 SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

IpGeolocationApi2Utility::setRegistrar(function (IpGeolocationApi2Utility $u): void {
    $u->clean = [IpGeolocationApi2Clean::class, 'call'];
    $u->done = [IpGeolocationApi2Done::class, 'call'];
    $u->make_error = [IpGeolocationApi2MakeError::class, 'call'];
    $u->feature_add = [IpGeolocationApi2FeatureAdd::class, 'call'];
    $u->feature_hook = [IpGeolocationApi2FeatureHook::class, 'call'];
    $u->feature_init = [IpGeolocationApi2FeatureInit::class, 'call'];
    $u->fetcher = [IpGeolocationApi2Fetcher::class, 'call'];
    $u->make_fetch_def = [IpGeolocationApi2MakeFetchDef::class, 'call'];
    $u->make_context = [IpGeolocationApi2MakeContext::class, 'call'];
    $u->make_options = [IpGeolocationApi2MakeOptions::class, 'call'];
    $u->make_request = [IpGeolocationApi2MakeRequest::class, 'call'];
    $u->make_response = [IpGeolocationApi2MakeResponse::class, 'call'];
    $u->make_result = [IpGeolocationApi2MakeResult::class, 'call'];
    $u->make_point = [IpGeolocationApi2MakePoint::class, 'call'];
    $u->make_spec = [IpGeolocationApi2MakeSpec::class, 'call'];
    $u->make_url = [IpGeolocationApi2MakeUrl::class, 'call'];
    $u->param = [IpGeolocationApi2Param::class, 'call'];
    $u->prepare_auth = [IpGeolocationApi2PrepareAuth::class, 'call'];
    $u->prepare_body = [IpGeolocationApi2PrepareBody::class, 'call'];
    $u->prepare_headers = [IpGeolocationApi2PrepareHeaders::class, 'call'];
    $u->prepare_method = [IpGeolocationApi2PrepareMethod::class, 'call'];
    $u->prepare_params = [IpGeolocationApi2PrepareParams::class, 'call'];
    $u->prepare_path = [IpGeolocationApi2PreparePath::class, 'call'];
    $u->prepare_query = [IpGeolocationApi2PrepareQuery::class, 'call'];
    $u->result_basic = [IpGeolocationApi2ResultBasic::class, 'call'];
    $u->result_body = [IpGeolocationApi2ResultBody::class, 'call'];
    $u->result_headers = [IpGeolocationApi2ResultHeaders::class, 'call'];
    $u->transform_request = [IpGeolocationApi2TransformRequest::class, 'call'];
    $u->transform_response = [IpGeolocationApi2TransformResponse::class, 'call'];
});
