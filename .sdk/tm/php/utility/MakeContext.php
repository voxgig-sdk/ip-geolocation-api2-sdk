<?php
declare(strict_types=1);

// IpGeolocationApi2 SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class IpGeolocationApi2MakeContext
{
    public static function call(array $ctxmap, ?IpGeolocationApi2Context $basectx): IpGeolocationApi2Context
    {
        return new IpGeolocationApi2Context($ctxmap, $basectx);
    }
}
