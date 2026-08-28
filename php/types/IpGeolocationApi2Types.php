<?php
declare(strict_types=1);

// Typed models for the IpGeolocationApi2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Entity1 entity data model. */
class Entity1
{
    public ?array $asn = null;
    public ?string $city = null;
    public ?string $continent = null;
    public string $country;
    public string $ip;
    public ?array $location = null;
    public ?string $postal = null;
    public ?string $subdivision = null;
}

/** Request payload for Entity1#load. */
class Entity1LoadMatch
{
    public ?string $field = null;
}

/** Entity2 entity data model. */
class Entity2
{
}

/** Request payload for Entity2#create. */
class Entity2CreateData
{
    public ?string $field = null;
}

/** Entity3 entity data model. */
class Entity3
{
    public ?array $asn = null;
    public ?string $city = null;
    public ?string $continent = null;
    public string $country;
    public ?string $id = null;
    public string $ip;
    public ?array $location = null;
    public ?string $postal = null;
    public ?string $subdivision = null;
}

/** Request payload for Entity3#load. */
class Entity3LoadMatch
{
    public string $id;
    public ?string $field = null;
}

/** Info entity data model. */
class Info
{
    public ?array $dataSources = null;
    public ?string $lastUpdated = null;
    public ?string $version = null;
}

/** Request payload for Info#list. */
class InfoListMatch
{
    public ?array $dataSources = null;
    public ?string $lastUpdated = null;
    public ?string $version = null;
}

