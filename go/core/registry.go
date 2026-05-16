package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewEntity1EntityFunc func(client *IpGeolocationApi2SDK, entopts map[string]any) IpGeolocationApi2Entity

var NewEntity2EntityFunc func(client *IpGeolocationApi2SDK, entopts map[string]any) IpGeolocationApi2Entity

var NewEntity3EntityFunc func(client *IpGeolocationApi2SDK, entopts map[string]any) IpGeolocationApi2Entity

var NewInfoEntityFunc func(client *IpGeolocationApi2SDK, entopts map[string]any) IpGeolocationApi2Entity

