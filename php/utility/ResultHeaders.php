<?php
declare(strict_types=1);

// IpGeolocationApi2 SDK utility: result_headers

class IpGeolocationApi2ResultHeaders
{
    public static function call(IpGeolocationApi2Context $ctx): ?IpGeolocationApi2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
