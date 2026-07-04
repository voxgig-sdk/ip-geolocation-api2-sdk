# Typed models for the IpGeolocationApi2 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Entity1:
    country: str
    ip: str
    asn: Optional[dict] = None
    city: Optional[str] = None
    continent: Optional[str] = None
    location: Optional[dict] = None
    postal: Optional[str] = None
    subdivision: Optional[str] = None


@dataclass
class Entity1LoadMatch:
    asn: Optional[dict] = None
    city: Optional[str] = None
    continent: Optional[str] = None
    country: Optional[str] = None
    ip: Optional[str] = None
    location: Optional[dict] = None
    postal: Optional[str] = None
    subdivision: Optional[str] = None


@dataclass
class Entity2:
    pass


@dataclass
class Entity2CreateData:
    pass


@dataclass
class Entity3:
    country: str
    ip: str
    asn: Optional[dict] = None
    city: Optional[str] = None
    continent: Optional[str] = None
    location: Optional[dict] = None
    postal: Optional[str] = None
    subdivision: Optional[str] = None


@dataclass
class Entity3LoadMatch:
    id: str


@dataclass
class Info:
    data_source: Optional[list] = None
    last_updated: Optional[str] = None
    version: Optional[str] = None


@dataclass
class InfoListMatch:
    data_source: Optional[list] = None
    last_updated: Optional[str] = None
    version: Optional[str] = None

