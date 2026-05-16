# ProjectName SDK exists test

import pytest
from ipgeolocationapi2_sdk import IpGeolocationApi2SDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = IpGeolocationApi2SDK.test(None, None)
        assert testsdk is not None
