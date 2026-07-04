# IpGeolocationApi2 Python SDK Reference

Complete API reference for the IpGeolocationApi2 Python SDK.


## IpGeolocationApi2SDK

### Constructor

```python
from ip-geolocation-api2_sdk import IpGeolocationApi2SDK

client = IpGeolocationApi2SDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IpGeolocationApi2SDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = IpGeolocationApi2SDK.test()
```


### Instance Methods

#### `Entity1(data=None)`

Create a new `Entity1Entity` instance. Pass `None` for no initial data.

#### `Entity2(data=None)`

Create a new `Entity2Entity` instance. Pass `None` for no initial data.

#### `Entity3(data=None)`

Create a new `Entity3Entity` instance. Pass `None` for no initial data.

#### `Info(data=None)`

Create a new `InfoEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## Entity1Entity

```python
entity1 = client.entity1
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.entity1.load({"id": "entity1_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Entity1Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Entity2Entity

```python
entity2 = client.entity2
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.entity2.create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Entity2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Entity3Entity

```python
entity3 = client.entity3
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.entity3.load({"id": "entity3_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Entity3Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InfoEntity

```python
info = client.info
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_source` | ``$ARRAY`` | No |  |
| `last_updated` | ``$STRING`` | No |  |
| `version` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.info.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InfoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = IpGeolocationApi2SDK({
    "feature": {
        "test": {"active": True},
    },
})
```

