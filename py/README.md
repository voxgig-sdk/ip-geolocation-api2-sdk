# IpGeolocationApi2 Python SDK



The Python SDK for the IpGeolocationApi2 API — an entity-oriented client following Pythonic conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/ip-geolocation-api2-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
from ipgeolocationapi2_sdk import IpGeolocationApi2SDK

client = IpGeolocationApi2SDK()
```

### 3. Load an entity1

```python
try:
    result = client.entity1.load({"id": "example_id"})
    print(result)
except Exception as err:
    print(f"load failed: {err}")
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    print(result["err"])     # error value
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = IpGeolocationApi2SDK.test()

result = client.entity1.load({"id": "test01"})
# result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = IpGeolocationApi2SDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
IP_GEOLOCATION_API2_TEST_LIVE=TRUE
```

Then run:

```bash
cd py && pytest test/
```


## Reference

### IpGeolocationApi2SDK

```python
from ipgeolocationapi2_sdk import IpGeolocationApi2SDK

client = IpGeolocationApi2SDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = IpGeolocationApi2SDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### IpGeolocationApi2SDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Entity1` | `(data) -> Entity1Entity` | Create a Entity1 entity instance. |
| `Entity2` | `(data) -> Entity2Entity` | Create a Entity2 entity instance. |
| `Entity3` | `(data) -> Entity3Entity` | Create a Entity3 entity instance. |
| `Info` | `(data) -> InfoEntity` | Create a Info entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the bare result data (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### Entity1

| Field | Description |
| --- | --- |
| `asn` |  |
| `city` |  |
| `continent` |  |
| `country` |  |
| `ip` |  |
| `location` |  |
| `postal` |  |
| `subdivision` |  |

Operations: Load.

API path: `/`

#### Entity2

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/`

#### Entity3

| Field | Description |
| --- | --- |
| `asn` |  |
| `city` |  |
| `continent` |  |
| `country` |  |
| `ip` |  |
| `location` |  |
| `postal` |  |
| `subdivision` |  |

Operations: Load.

API path: `/{ip}`

#### Info

| Field | Description |
| --- | --- |
| `data_source` |  |
| `last_updated` |  |
| `version` |  |

Operations: List.

API path: `/info`



## Entities


### Entity1

Create an instance: `const entity1 = client.entity1`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asn` | ``$OBJECT`` |  |
| `city` | ``$STRING`` |  |
| `continent` | ``$STRING`` |  |
| `country` | ``$STRING`` |  |
| `ip` | ``$STRING`` |  |
| `location` | ``$OBJECT`` |  |
| `postal` | ``$STRING`` |  |
| `subdivision` | ``$STRING`` |  |

#### Example: Load

```ts
const entity1 = await client.entity1.load({ id: 'entity1_id' })
```


### Entity2

Create an instance: `const entity2 = client.entity2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const entity2 = await client.entity2.create({
})
```


### Entity3

Create an instance: `const entity3 = client.entity3`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asn` | ``$OBJECT`` |  |
| `city` | ``$STRING`` |  |
| `continent` | ``$STRING`` |  |
| `country` | ``$STRING`` |  |
| `ip` | ``$STRING`` |  |
| `location` | ``$OBJECT`` |  |
| `postal` | ``$STRING`` |  |
| `subdivision` | ``$STRING`` |  |

#### Example: Load

```ts
const entity3 = await client.entity3.load({ id: 'entity3_id' })
```


### Info

Create an instance: `const info = client.info`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data_source` | ``$ARRAY`` |  |
| `last_updated` | ``$STRING`` |  |
| `version` | ``$STRING`` |  |

#### Example: List

```ts
const infos = await client.info.list()
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller as the second element in the return tuple.

### Features and hooks

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── ipgeolocationapi2_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`ipgeolocationapi2_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
entity1 = client.entity1
entity1.load({"id": "example_id"})

# entity1.data_get() now returns the loaded entity1 data
# entity1.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
