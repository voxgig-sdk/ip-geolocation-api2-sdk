package voxgigipgeolocationapi2sdk

import (
	"github.com/voxgig-sdk/ip-geolocation-api2-sdk/go/core"
	"github.com/voxgig-sdk/ip-geolocation-api2-sdk/go/entity"
	"github.com/voxgig-sdk/ip-geolocation-api2-sdk/go/feature"
	_ "github.com/voxgig-sdk/ip-geolocation-api2-sdk/go/utility"
)

// Type aliases preserve external API.
type IpGeolocationApi2SDK = core.IpGeolocationApi2SDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type IpGeolocationApi2Entity = core.IpGeolocationApi2Entity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type IpGeolocationApi2Error = core.IpGeolocationApi2Error

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewEntity1EntityFunc = func(client *core.IpGeolocationApi2SDK, entopts map[string]any) core.IpGeolocationApi2Entity {
		return entity.NewEntity1Entity(client, entopts)
	}
	core.NewEntity2EntityFunc = func(client *core.IpGeolocationApi2SDK, entopts map[string]any) core.IpGeolocationApi2Entity {
		return entity.NewEntity2Entity(client, entopts)
	}
	core.NewEntity3EntityFunc = func(client *core.IpGeolocationApi2SDK, entopts map[string]any) core.IpGeolocationApi2Entity {
		return entity.NewEntity3Entity(client, entopts)
	}
	core.NewInfoEntityFunc = func(client *core.IpGeolocationApi2SDK, entopts map[string]any) core.IpGeolocationApi2Entity {
		return entity.NewInfoEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewIpGeolocationApi2SDK = core.NewIpGeolocationApi2SDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewIpGeolocationApi2SDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *IpGeolocationApi2SDK  { return NewIpGeolocationApi2SDK(nil) }
func Test() *IpGeolocationApi2SDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
