# IpGeolocationApi2 Golang SDK Reference

Complete API reference for the IpGeolocationApi2 Golang SDK.


## IpGeolocationApi2SDK

### Constructor

```go
func NewIpGeolocationApi2SDK(options map[string]any) *IpGeolocationApi2SDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *IpGeolocationApi2SDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *IpGeolocationApi2SDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Entity1(data map[string]any) IpGeolocationApi2Entity`

Create a new `Entity1` entity instance. Pass `nil` for no initial data.

#### `Entity2(data map[string]any) IpGeolocationApi2Entity`

Create a new `Entity2` entity instance. Pass `nil` for no initial data.

#### `Entity3(data map[string]any) IpGeolocationApi2Entity`

Create a new `Entity3` entity instance. Pass `nil` for no initial data.

#### `Info(data map[string]any) IpGeolocationApi2Entity`

Create a new `Info` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## Entity1Entity

```go
entity1 := client.Entity1(nil)
fmt.Println(entity1.GetName()) // "entity1"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `map[string]any` | No |  |
| `city` | `string` | No |  |
| `continent` | `string` | No |  |
| `country` | `string` | Yes |  |
| `ip` | `string` | Yes |  |
| `location` | `map[string]any` | No |  |
| `postal` | `string` | No |  |
| `subdivision` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Entity1(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `Entity1Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Entity2Entity

```go
entity2 := client.Entity2(nil)
fmt.Println(entity2.GetName()) // "entity2"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Entity2(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `Entity2Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Entity3Entity

```go
entity3 := client.Entity3(nil)
fmt.Println(entity3.GetName()) // "entity3"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `map[string]any` | No |  |
| `city` | `string` | No |  |
| `continent` | `string` | No |  |
| `country` | `string` | Yes |  |
| `ip` | `string` | Yes |  |
| `location` | `map[string]any` | No |  |
| `postal` | `string` | No |  |
| `subdivision` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Entity3(nil).Load(map[string]any{"id": "entity3_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `Entity3Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InfoEntity

```go
info := client.Info(nil)
fmt.Println(info.GetName()) // "info"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_source` | `[]any` | No |  |
| `last_updated` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Info(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InfoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewIpGeolocationApi2SDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

