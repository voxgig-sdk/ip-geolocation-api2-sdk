<?php
declare(strict_types=1);

// IpGeolocationApi2 SDK configuration

class IpGeolocationApi2Config
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "IpGeolocationApi2",
                "slug" => "ip-geolocation-api2",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://api.country.is",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "entity1" => [],
                    "entity2" => [],
                    "entity3" => [],
                    "info" => [],
                ],
            ],
            "entity" => [
        'entity1' => [
          'fields' => [
            [
              'name' => 'asn',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'city',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'continent',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'country',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ip',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'location',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'postal',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'subdivision',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'entity1',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'city,asn',
                        'kind' => 'query',
                        'name' => 'field',
                        'orig' => 'field',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/',
                  'segments' => [],
                  'select' => [
                    'exist' => [
                      'field',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'entity2' => [
          'fields' => [],
          'name' => 'entity2',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'city,asn',
                        'kind' => 'query',
                        'name' => 'field',
                        'orig' => 'field',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/',
                  'segments' => [],
                  'select' => [
                    'exist' => [
                      'field',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'entity3' => [
          'fields' => [
            [
              'name' => 'asn',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'city',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'continent',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'country',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ip',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'location',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'postal',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'subdivision',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'entity3',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '8.8.8.8',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'ip',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'city,asn',
                        'kind' => 'query',
                        'name' => 'field',
                        'orig' => 'field',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{ip}',
                  'rename' => [
                    'param' => [
                      'ip' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'field',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'info' => [
          'fields' => [
            [
              'name' => 'dataSources',
              'type' => '`$ARRAY`',
            ],
            [
              'format' => 'date-time',
              'name' => 'lastUpdated',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'version',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'info',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/info',
                  'segments' => [
                    [
                      'lit' => 'info',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.dataSources`',
                  ],
                  'parts' => [
                    'info',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return IpGeolocationApi2Features::make_feature($name);
    }
}
