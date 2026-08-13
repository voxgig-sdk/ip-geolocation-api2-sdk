# IpGeolocationApi2 SDK utility: make_context

from projectname_sdk.core.context import IpGeolocationApi2Context


def make_context_util(ctxmap, basectx):
    return IpGeolocationApi2Context(ctxmap, basectx)
