
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://api.country.is',

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      entity1: {
      },

      entity2: {
      },

      entity3: {
      },

      info: {
      },

    }
  }


  entity = {
    "entity1": {
      "fields": [
        {
          "name": "asn",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 0
        },
        {
          "name": "city",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "continent",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "country",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "ip",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        },
        {
          "name": "location",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 5
        },
        {
          "name": "postal",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 6
        },
        {
          "name": "subdivision",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 7
        }
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
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/",
              "select": {
                "exist": [
                  "field"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "parts": [],
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
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
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "POST",
              "orig": "/",
              "select": {
                "exist": [
                  "field"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "parts": [],
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "create"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "entity3": {
      "fields": [
        {
          "name": "asn",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 0
        },
        {
          "name": "city",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "continent",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "country",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "ip",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        },
        {
          "name": "location",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 5
        },
        {
          "name": "postal",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 6
        },
        {
          "name": "subdivision",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 7
        }
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "example": "city,asn",
                    "kind": "query",
                    "name": "field",
                    "orig": "field",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/{ip}",
              "parts": [
                "{id}"
              ],
              "rename": {
                "param": {
                  "ip": "id"
                }
              },
              "select": {
                "exist": [
                  "field",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "info": {
      "fields": [
        {
          "name": "data_source",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 0
        },
        {
          "name": "last_updated",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "version",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        }
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
                "info"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

