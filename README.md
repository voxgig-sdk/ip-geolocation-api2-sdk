# IpGeolocationApi2 SDK

Free, key-less IP-to-country lookup (with optional city, ASN and coordinates) backed by MaxMind GeoLite2

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Country

[Country](https://country.is) is a minimal IP geolocation API run by [Line of Flight](https://country.is). At its simplest it returns the two-letter country code for an IP address, but optional `fields` extend the response with city, continent, subdivision, postal code, coordinates and ASN.

What you get from the API:

- `GET /` — country of the caller's own IP
- `GET /{ip}` — country (and optional fields) for a specific IPv4 or IPv6 address
- `POST /` — batch lookup of up to 100 IPs in a single JSON array
- `GET /info` — metadata about the dataset, including last-update time
- A `?fields=` query parameter on lookup endpoints to add `city`, `continent`, `subdivision`, `postal`, `location` and `asn`

Operational notes: the service requires no authentication and imposes no daily quota, but the infrastructure caps each client IP at roughly 10 requests per second. Underlying data is refreshed daily from MaxMind GeoLite2, and no request logs are kept.

## Try it

**TypeScript**
```bash
npm install ip-geolocation-api2
```

**Python**
```bash
pip install ip-geolocation-api2-sdk
```

**PHP**
```bash
composer require voxgig/ip-geolocation-api2-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/ip-geolocation-api2-sdk/go
```

**Ruby**
```bash
gem install ip-geolocation-api2-sdk
```

**Lua**
```bash
luarocks install ip-geolocation-api2-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { IpGeolocationApi2SDK } from 'ip-geolocation-api2'

const client = new IpGeolocationApi2SDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o ip-geolocation-api2-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "ip-geolocation-api2": {
      "command": "/abs/path/to/ip-geolocation-api2-mcp"
    }
  }
}
```

## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Entity1** |  | `/` |
| **Entity2** |  | `/` |
| **Entity3** |  | `/{ip}` |
| **Info** | Dataset metadata about the geolocation database, including last-update time, served from `GET /info`. | `/info` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from ipgeolocationapi2_sdk import IpGeolocationApi2SDK

client = IpGeolocationApi2SDK({})


# Load a specific entity1
entity1, err = client.Entity1(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'ipgeolocationapi2_sdk.php';

$client = new IpGeolocationApi2SDK([]);


// Load a specific entity1
[$entity1, $err] = $client->Entity1(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/ip-geolocation-api2-sdk/go"

client := sdk.NewIpGeolocationApi2SDK(map[string]any{})

```

### Ruby

```ruby
require_relative "IpGeolocationApi2_sdk"

client = IpGeolocationApi2SDK.new({})


# Load a specific entity1
entity1, err = client.Entity1(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("ip-geolocation-api2_sdk")

local client = sdk.new({})


-- Load a specific entity1
local entity1, err = client:Entity1(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = IpGeolocationApi2SDK.test()
const result = await client.Entity1().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = IpGeolocationApi2SDK.test(None, None)
result, err = client.Entity1(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = IpGeolocationApi2SDK::test(null, null);
[$result, $err] = $client->Entity1(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Entity1(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = IpGeolocationApi2SDK.test(nil, nil)
result, err = client.Entity1(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Entity1(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Country

- Upstream: [https://country.is](https://country.is)

- Operated as a free public service by Line of Flight, free for commercial use
- No API key, no quotas, no request logging
- Infrastructure rate-limits to 10 requests per second per IP to prevent abuse
- Geolocation data comes from MaxMind GeoLite2 (updated daily); Cloudflare geolocation is used when available

---

Generated from the Country OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
