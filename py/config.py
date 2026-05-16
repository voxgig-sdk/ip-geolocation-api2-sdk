# IpGeolocationApi2 SDK configuration


def make_config():
    return {
        "main": {
            "name": "IpGeolocationApi2",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.country.is",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "entity1": {},
                "entity2": {},
                "entity3": {},
                "info": {},
            },
        },
        "entity": {
      "entity1": {
        "fields": [
          {
            "name": "asn",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "city",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "continent",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "country",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "ip",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "location",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "postal",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "subdivision",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
        ],
        "name": "entity1",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "city,asn",
                      "kind": "query",
                      "name": "field",
                      "orig": "field",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/",
                "select": {
                  "exist": [
                    "field",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "parts": [],
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "entity2": {
        "fields": [],
        "name": "entity2",
        "op": {
          "create": {
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "city,asn",
                      "kind": "query",
                      "name": "field",
                      "orig": "field",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/",
                "select": {
                  "exist": [
                    "field",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "parts": [],
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "entity3": {
        "fields": [
          {
            "name": "asn",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "city",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "continent",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "country",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "ip",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "location",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "postal",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "subdivision",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
        ],
        "name": "entity3",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "8.8.8.8",
                      "kind": "param",
                      "name": "id",
                      "orig": "ip",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": "city,asn",
                      "kind": "query",
                      "name": "field",
                      "orig": "field",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/{ip}",
                "parts": [
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "ip": "id",
                  },
                },
                "select": {
                  "exist": [
                    "field",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "info": {
        "fields": [
          {
            "name": "data_source",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "last_updated",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "version",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "info",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/info",
                "parts": [
                  "info",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
