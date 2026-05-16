package core

type IpGeolocationApi2Error struct {
	IsIpGeolocationApi2Error bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewIpGeolocationApi2Error(code string, msg string, ctx *Context) *IpGeolocationApi2Error {
	return &IpGeolocationApi2Error{
		IsIpGeolocationApi2Error: true,
		Sdk:              "IpGeolocationApi2",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *IpGeolocationApi2Error) Error() string {
	return e.Msg
}
