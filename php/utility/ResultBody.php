<?php
declare(strict_types=1);

// IpGeolocationApi2 SDK utility: result_body

class IpGeolocationApi2ResultBody
{
    public static function call(IpGeolocationApi2Context $ctx): ?IpGeolocationApi2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
