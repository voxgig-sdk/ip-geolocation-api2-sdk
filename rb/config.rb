# IpGeolocationApi2 SDK configuration

module IpGeolocationApi2Config
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "IpGeolocationApi2",
        "slug" => "ip-geolocation-api2",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.country.is",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "entity1" => {},
          "entity2" => {},
          "entity3" => {},
          "info" => {},
        },
      },
      "entity" => {
        "entity1" => {
          "fields" => [
            {
              "name" => "asn",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "city",
              "type" => "`$STRING`",
            },
            {
              "name" => "continent",
              "type" => "`$STRING`",
            },
            {
              "name" => "country",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "ip",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "location",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "postal",
              "type" => "`$STRING`",
            },
            {
              "name" => "subdivision",
              "type" => "`$STRING`",
            },
          ],
          "name" => "entity1",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "city,asn",
                        "kind" => "query",
                        "name" => "field",
                        "orig" => "field",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/",
                  "parts" => [],
                  "select" => {
                    "exist" => [
                      "field",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "entity2" => {
          "fields" => [],
          "name" => "entity2",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "city,asn",
                        "kind" => "query",
                        "name" => "field",
                        "orig" => "field",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/",
                  "parts" => [],
                  "select" => {
                    "exist" => [
                      "field",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "entity3" => {
          "fields" => [
            {
              "name" => "asn",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "city",
              "type" => "`$STRING`",
            },
            {
              "name" => "continent",
              "type" => "`$STRING`",
            },
            {
              "name" => "country",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "ip",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "location",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "postal",
              "type" => "`$STRING`",
            },
            {
              "name" => "subdivision",
              "type" => "`$STRING`",
            },
          ],
          "name" => "entity3",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "8.8.8.8",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "ip",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "city,asn",
                        "kind" => "query",
                        "name" => "field",
                        "orig" => "field",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/{ip}",
                  "parts" => [
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "ip" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "field",
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "info" => {
          "fields" => [
            {
              "name" => "dataSources",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "lastUpdated",
              "type" => "`$STRING`",
            },
            {
              "name" => "version",
              "type" => "`$STRING`",
            },
          ],
          "name" => "info",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/info",
                  "parts" => [
                    "info",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.dataSources`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    IpGeolocationApi2Features.make_feature(name)
  end
end
