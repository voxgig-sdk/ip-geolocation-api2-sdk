<?php
declare(strict_types=1);

// IpGeolocationApi2 SDK base feature

class IpGeolocationApi2BaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(IpGeolocationApi2Context $ctx, array $options): void {}
    public function PostConstruct(IpGeolocationApi2Context $ctx): void {}
    public function PostConstructEntity(IpGeolocationApi2Context $ctx): void {}
    public function SetData(IpGeolocationApi2Context $ctx): void {}
    public function GetData(IpGeolocationApi2Context $ctx): void {}
    public function GetMatch(IpGeolocationApi2Context $ctx): void {}
    public function SetMatch(IpGeolocationApi2Context $ctx): void {}
    public function PrePoint(IpGeolocationApi2Context $ctx): void {}
    public function PreSpec(IpGeolocationApi2Context $ctx): void {}
    public function PreRequest(IpGeolocationApi2Context $ctx): void {}
    public function PreResponse(IpGeolocationApi2Context $ctx): void {}
    public function PreResult(IpGeolocationApi2Context $ctx): void {}
    public function PreDone(IpGeolocationApi2Context $ctx): void {}
    public function PreUnexpected(IpGeolocationApi2Context $ctx): void {}
}
