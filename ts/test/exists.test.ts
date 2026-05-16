
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { IpGeolocationApi2SDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await IpGeolocationApi2SDK.test()
    equal(null !== testsdk, true)
  })

})
