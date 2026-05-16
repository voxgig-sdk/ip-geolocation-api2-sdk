# IpGeolocationApi2 Ruby SDK Reference

Complete API reference for the IpGeolocationApi2 Ruby SDK.


## IpGeolocationApi2SDK

### Constructor

```ruby
require_relative 'ip-geolocation-api2_sdk'

client = IpGeolocationApi2SDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IpGeolocationApi2SDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = IpGeolocationApi2SDK.test
```


### Instance Methods

#### `Entity1(data = nil)`

Create a new `Entity1` entity instance. Pass `nil` for no initial data.

#### `Entity2(data = nil)`

Create a new `Entity2` entity instance. Pass `nil` for no initial data.

#### `Entity3(data = nil)`

Create a new `Entity3` entity instance. Pass `nil` for no initial data.

#### `Info(data = nil)`

Create a new `Info` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## Entity1Entity

```ruby
entity1 = client.Entity1
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | ``$OBJECT`` | No |  |
| `city` | ``$STRING`` | No |  |
| `continent` | ``$STRING`` | No |  |
| `country` | ``$STRING`` | Yes |  |
| `ip` | ``$STRING`` | Yes |  |
| `location` | ``$OBJECT`` | No |  |
| `postal` | ``$STRING`` | No |  |
| `subdivision` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Entity1.load({ "id" => "entity1_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `Entity1Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Entity2Entity

```ruby
entity2 = client.Entity2
```

### Operations

#### `create(reqdata, ctrl = nil) -> result, err`

Create a new entity with the given data.

```ruby
result, err = client.Entity2.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `Entity2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Entity3Entity

```ruby
entity3 = client.Entity3
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | ``$OBJECT`` | No |  |
| `city` | ``$STRING`` | No |  |
| `continent` | ``$STRING`` | No |  |
| `country` | ``$STRING`` | Yes |  |
| `ip` | ``$STRING`` | Yes |  |
| `location` | ``$OBJECT`` | No |  |
| `postal` | ``$STRING`` | No |  |
| `subdivision` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Entity3.load({ "id" => "entity3_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `Entity3Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InfoEntity

```ruby
info = client.Info
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_source` | ``$ARRAY`` | No |  |
| `last_updated` | ``$STRING`` | No |  |
| `version` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Info.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InfoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = IpGeolocationApi2SDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

