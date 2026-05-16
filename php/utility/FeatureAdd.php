<?php
declare(strict_types=1);

// IpGeolocationApi2 SDK utility: feature_add

class IpGeolocationApi2FeatureAdd
{
    public static function call(IpGeolocationApi2Context $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
