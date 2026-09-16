

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


describe('Entity2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API2_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_GEOLOCATION_API2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpGeolocationApi2SDK.test()
    const ent = testsdk.Entity2()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_GEOLOCATION_API2_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'entity2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"entity2","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"example":"city,asn","kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /","json":"{\"parameters\":[{\"description\":\"Comma-separated list of extra fields to include. Valid values: city, continent, subdivision, postal, location, asn.\",\"in\":\"query\",\"name\":\"fields\",\"schema\":{\"example\":\"city,asn\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"example\":[\"8.8.8.8\",\"1.1.1.1\"],\"items\":{\"format\":\"ipv4 or ipv6\",\"type\":\"string\"},\"maxItems\":100,\"type\":\"array\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"asn\":{\"nullable\":true,\"properties\":{\"number\":{\"example\":15169,\"type\":\"integer\"},\"organization\":{\"example\":\"Google LLC\",\"type\":\"string\"}},\"type\":\"object\"},\"city\":{\"example\":\"Mountain View\",\"nullable\":true,\"type\":\"string\"},\"continent\":{\"example\":\"NA\",\"nullable\":true,\"type\":\"string\"},\"country\":{\"example\":\"US\",\"nullable\":true,\"type\":\"string\"},\"ip\":{\"example\":\"8.8.8.8\",\"type\":\"string\"},\"location\":{\"nullable\":true,\"properties\":{\"accuracy_radius\":{\"example\":1000,\"type\":\"integer\"},\"latitude\":{\"example\":37.386,\"type\":\"number\"},\"longitude\":{\"example\":-122.0838,\"type\":\"number\"},\"time_zone\":{\"example\":\"America/Los_Angeles\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"postal\":{\"example\":\"94043\",\"nullable\":true,\"type\":\"string\"},\"subdivision\":{\"example\":\"CA\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"ip\",\"country\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Array of lookup results. IPs without a match are omitted.\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"example\":422,\"type\":\"integer\"},\"message\":{\"example\":\"Unprocessable Entity\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Invalid input\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/","segments":[],"select":{"exist":["field"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"entity2","name__orig":"entity2","Name":"Entity2","name_":"entity2","name-":"entity2","NAME":"ENTITY2","index$":1}, {"active":true,"entity":"entity2","key$":"BasicEntity2Flow","kind":"basic","name":"BasicEntity2Flow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"entity2_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Entity2')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const entity2_ref01_ent = client.Entity2()
    let entity2_ref01_data = setup.data.new.entity2['entity2_ref01']

    entity2_ref01_data = (await entity2_ref01_ent.create(entity2_ref01_data)).data()
    assert(null != entity2_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/entity2/Entity2TestData.json')

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
    ['entity201','entity202','entity203'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_GEOLOCATION_API2_TEST_ENTITY2_ENTID': idmap,
    'IP_GEOLOCATION_API2_TEST_LIVE': 'FALSE',
    'IP_GEOLOCATION_API2_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_GEOLOCATION_API2_TEST_ENTITY2_ENTID']

  const live = 'TRUE' === env.IP_GEOLOCATION_API2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_GEOLOCATION_API2_TEST_ENTITY2_ENTID']
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
  
