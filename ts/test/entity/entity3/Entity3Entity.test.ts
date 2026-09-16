

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { IpGeolocationApi2SDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('Entity3Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API2_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_GEOLOCATION_API2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpGeolocationApi2SDK.test()
    const ent = testsdk.Entity3()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_GEOLOCATION_API2_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'entity3.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"asn","req":false,"type":"`$OBJECT`","index$":0},{"active":true,"name":"city","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"continent","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"country","req":true,"type":"`$STRING`","index$":3},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"ip","req":true,"type":"`$STRING`","index$":5},{"active":true,"name":"location","req":false,"type":"`$OBJECT`","index$":6},{"active":true,"name":"postal","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"subdivision","req":false,"type":"`$STRING`","index$":8}],"id":{"field":"id","name":"id"},"name":"entity3","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"8.8.8.8","kind":"param","name":"id","orig":"ip","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"city,asn","kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /{ip}","json":"{\"parameters\":[{\"example\":\"8.8.8.8\",\"in\":\"path\",\"name\":\"ip\",\"required\":true,\"schema\":{\"format\":\"ipv4 or ipv6\",\"type\":\"string\"}},{\"description\":\"Comma-separated list of extra fields to include. Valid values: city, continent, subdivision, postal, location, asn.\",\"in\":\"query\",\"name\":\"fields\",\"schema\":{\"example\":\"city,asn\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"asn\":{\"nullable\":true,\"properties\":{\"number\":{\"example\":15169,\"type\":\"integer\"},\"organization\":{\"example\":\"Google LLC\",\"type\":\"string\"}},\"type\":\"object\"},\"city\":{\"example\":\"Mountain View\",\"nullable\":true,\"type\":\"string\"},\"continent\":{\"example\":\"NA\",\"nullable\":true,\"type\":\"string\"},\"country\":{\"example\":\"US\",\"nullable\":true,\"type\":\"string\"},\"ip\":{\"example\":\"8.8.8.8\",\"type\":\"string\"},\"location\":{\"nullable\":true,\"properties\":{\"accuracy_radius\":{\"example\":1000,\"type\":\"integer\"},\"latitude\":{\"example\":37.386,\"type\":\"number\"},\"longitude\":{\"example\":-122.0838,\"type\":\"number\"},\"time_zone\":{\"example\":\"America/Los_Angeles\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"postal\":{\"example\":\"94043\",\"nullable\":true,\"type\":\"string\"},\"subdivision\":{\"example\":\"CA\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"ip\",\"country\"],\"type\":\"object\"}}},\"description\":\"Successful lookup\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"example\":404,\"type\":\"integer\"},\"message\":{\"example\":\"Not Found\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"IP could not be resolved\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"example\":422,\"type\":\"integer\"},\"message\":{\"example\":\"Unprocessable Entity\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Invalid input\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/{ip}","rename":{"param":{"ip":"id"}},"segments":[{"var":"id"}],"select":{"exist":["field","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"entity3","name__orig":"entity3","Name":"Entity3","name_":"entity3","name-":"entity3","NAME":"ENTITY3","index$":2}, {"active":true,"entity":"entity3","key$":"BasicEntity3Flow","kind":"basic","name":"BasicEntity3Flow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"entity3_ref01","srcdatavar":"entity3_ref01_data","suffix":"_dt0"},"match":{"id":"entity301"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-entity3_ref01"}}],"index$":0}]}, 'Entity3')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let entity3_ref01_data = Object.values(setup.data.existing.entity3)[0] as any

    // LOAD
    const entity3_ref01_ent = client.Entity3()
    const entity3_ref01_match_dt0: any = {}
    entity3_ref01_match_dt0.id = entity3_ref01_data.id
    const entity3_ref01_data_dt0 = (await entity3_ref01_ent.load(entity3_ref01_match_dt0)).data()
    assert(entity3_ref01_data_dt0.id === entity3_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/entity3/Entity3TestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = IpGeolocationApi2SDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['entity301','entity302','entity303'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_GEOLOCATION_API2_TEST_ENTITY3_ENTID': idmap,
    'IP_GEOLOCATION_API2_TEST_LIVE': 'FALSE',
    'IP_GEOLOCATION_API2_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_GEOLOCATION_API2_TEST_ENTITY3_ENTID']

  const live = 'TRUE' === env.IP_GEOLOCATION_API2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_GEOLOCATION_API2_TEST_ENTITY3_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new IpGeolocationApi2SDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.IP_GEOLOCATION_API2_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
