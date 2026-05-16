# IpGeolocationApi2 SDK feature factory

from feature.base_feature import IpGeolocationApi2BaseFeature
from feature.test_feature import IpGeolocationApi2TestFeature


def _make_feature(name):
    features = {
        "base": lambda: IpGeolocationApi2BaseFeature(),
        "test": lambda: IpGeolocationApi2TestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
