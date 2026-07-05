// Typed models for the IpGeolocationApi2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Entity1 is the typed data model for the entity1 entity.
type Entity1 struct {
	Asn *map[string]any `json:"asn,omitempty"`
	City *string `json:"city,omitempty"`
	Continent *string `json:"continent,omitempty"`
	Country string `json:"country"`
	Ip string `json:"ip"`
	Location *map[string]any `json:"location,omitempty"`
	Postal *string `json:"postal,omitempty"`
	Subdivision *string `json:"subdivision,omitempty"`
}

// Entity1LoadMatch is the typed request payload for Entity1.LoadTyped.
type Entity1LoadMatch struct {
	Asn *map[string]any `json:"asn,omitempty"`
	City *string `json:"city,omitempty"`
	Continent *string `json:"continent,omitempty"`
	Country *string `json:"country,omitempty"`
	Ip *string `json:"ip,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	Postal *string `json:"postal,omitempty"`
	Subdivision *string `json:"subdivision,omitempty"`
}

// Entity2 is the typed data model for the entity2 entity.
type Entity2 struct {
}

// Entity2CreateData is the typed request payload for Entity2.CreateTyped.
type Entity2CreateData struct {
}

// Entity3 is the typed data model for the entity3 entity.
type Entity3 struct {
	Asn *map[string]any `json:"asn,omitempty"`
	City *string `json:"city,omitempty"`
	Continent *string `json:"continent,omitempty"`
	Country string `json:"country"`
	Ip string `json:"ip"`
	Location *map[string]any `json:"location,omitempty"`
	Postal *string `json:"postal,omitempty"`
	Subdivision *string `json:"subdivision,omitempty"`
}

// Entity3LoadMatch is the typed request payload for Entity3.LoadTyped.
type Entity3LoadMatch struct {
	Id string `json:"id"`
}

// Info is the typed data model for the info entity.
type Info struct {
	DataSource *[]any `json:"data_source,omitempty"`
	LastUpdated *string `json:"last_updated,omitempty"`
	Version *string `json:"version,omitempty"`
}

// InfoListMatch is the typed request payload for Info.ListTyped.
type InfoListMatch struct {
	DataSource *[]any `json:"data_source,omitempty"`
	LastUpdated *string `json:"last_updated,omitempty"`
	Version *string `json:"version,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
