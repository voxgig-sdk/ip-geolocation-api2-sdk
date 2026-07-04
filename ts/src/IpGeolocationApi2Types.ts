// Typed models for the IpGeolocationApi2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Entity1 {
  asn?: Record<string, any>
  city?: string
  continent?: string
  country: string
  ip: string
  location?: Record<string, any>
  postal?: string
  subdivision?: string
}

export type Entity1LoadMatch = Partial<Entity1>

export interface Entity2 {
}

export type Entity2CreateData = Partial<Entity2>

export interface Entity3 {
  asn?: Record<string, any>
  city?: string
  continent?: string
  country: string
  ip: string
  location?: Record<string, any>
  postal?: string
  subdivision?: string
}

export interface Entity3LoadMatch {
  id: string
}

export interface Info {
  data_source?: any[]
  last_updated?: string
  version?: string
}

export type InfoListMatch = Partial<Info>

