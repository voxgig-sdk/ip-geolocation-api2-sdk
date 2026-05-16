<?php
declare(strict_types=1);

// IpGeolocationApi2 SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class IpGeolocationApi2Features
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new IpGeolocationApi2BaseFeature();
            case "test":
                return new IpGeolocationApi2TestFeature();
            default:
                return new IpGeolocationApi2BaseFeature();
        }
    }
}
