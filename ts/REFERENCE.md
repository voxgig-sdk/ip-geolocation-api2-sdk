# IpGeolocationApi2 TypeScript SDK Reference

Complete API reference for the IpGeolocationApi2 TypeScript SDK.


## IpGeolocationApi2SDK

### Constructor

```ts
new IpGeolocationApi2SDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IpGeolocationApi2SDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = IpGeolocationApi2SDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `IpGeolocationApi2SDK` instance in test mode.


### Instance Methods

#### `Entity1(data?: object)`

Create a new `Entity1` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `Entity1Entity` instance.

#### `Entity2(data?: object)`

Create a new `Entity2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `Entity2Entity` instance.

#### `Entity3(data?: object)`

Create a new `Entity3` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `Entity3Entity` instance.

#### `Info(data?: object)`

Create a new `Info` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InfoEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `IpGeolocationApi2SDK.test()`.

**Returns:** `IpGeolocationApi2SDK` instance in test mode.


---

## Entity1Entity

```ts
const entity1 = client.Entity1()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `Record<string, any>` | No |  |
| `city` | `string` | No |  |
| `continent` | `string` | No |  |
| `country` | `string` | Yes |  |
| `ip` | `string` | Yes |  |
| `location` | `Record<string, any>` | No |  |
| `postal` | `string` | No |  |
| `subdivision` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Entity1().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `Entity1Entity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Entity2Entity

```ts
const entity2 = client.Entity2()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Entity2().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `Entity2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Entity3Entity

```ts
const entity3 = client.Entity3()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `Record<string, any>` | No |  |
| `city` | `string` | No |  |
| `continent` | `string` | No |  |
| `country` | `string` | Yes |  |
| `id` | `string` | No |  |
| `ip` | `string` | Yes |  |
| `location` | `Record<string, any>` | No |  |
| `postal` | `string` | No |  |
| `subdivision` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Entity3().load({ id: 'entity3_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `Entity3Entity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InfoEntity

```ts
const info = client.Info()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataSources` | `any[]` | No |  |
| `lastUpdated` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Info().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InfoEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new IpGeolocationApi2SDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

