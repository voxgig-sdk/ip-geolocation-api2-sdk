# Typed models for the IpGeolocationApi2 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Entity1Required(TypedDict):
    country: str
    ip: str


class Entity1(Entity1Required, total=False):
    asn: dict
    city: str
    continent: str
    location: dict
    postal: str
    subdivision: str


class Entity1LoadMatch(TypedDict, total=False):
    asn: dict
    city: str
    continent: str
    country: str
    ip: str
    location: dict
    postal: str
    subdivision: str


class Entity2(TypedDict):
    pass


class Entity2CreateData(TypedDict):
    pass


class Entity3Required(TypedDict):
    country: str
    ip: str


class Entity3(Entity3Required, total=False):
    asn: dict
    city: str
    continent: str
    location: dict
    postal: str
    subdivision: str


class Entity3LoadMatch(TypedDict):
    id: str


class Info(TypedDict, total=False):
    data_source: list
    last_updated: str
    version: str


class InfoListMatch(TypedDict, total=False):
    data_source: list
    last_updated: str
    version: str
