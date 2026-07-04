# IpGeolocationApi2 PHP SDK Reference

Complete API reference for the IpGeolocationApi2 PHP SDK.


## IpGeolocationApi2SDK

### Constructor

```php
require_once __DIR__ . '/ip-geolocation-api2_sdk.php';

$client = new IpGeolocationApi2SDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IpGeolocationApi2SDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = IpGeolocationApi2SDK::test();
```


### Instance Methods

#### `Entity1($data = null)`

Create a new `Entity1Entity` instance. Pass `null` for no initial data.

#### `Entity2($data = null)`

Create a new `Entity2Entity` instance. Pass `null` for no initial data.

#### `Entity3($data = null)`

Create a new `Entity3Entity` instance. Pass `null` for no initial data.

#### `Info($data = null)`

Create a new `InfoEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## Entity1Entity

```php
$entity1 = $client->entity1();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->entity1()->load(["id" => "entity1_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): Entity1Entity`

Create a new `Entity1Entity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Entity2Entity

```php
$entity2 = $client->entity2();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->entity2()->create([
]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): Entity2Entity`

Create a new `Entity2Entity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Entity3Entity

```php
$entity3 = $client->entity3();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->entity3()->load(["id" => "entity3_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): Entity3Entity`

Create a new `Entity3Entity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## InfoEntity

```php
$info = $client->info();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_source` | ``$ARRAY`` | No |  |
| `last_updated` | ``$STRING`` | No |  |
| `version` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->info()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): InfoEntity`

Create a new `InfoEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new IpGeolocationApi2SDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

