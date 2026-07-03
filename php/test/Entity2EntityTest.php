<?php
declare(strict_types=1);

// Entity2 entity test

require_once __DIR__ . '/../ipgeolocationapi2_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class Entity2EntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = IpGeolocationApi2SDK::test(null, null);
        $ent = $testsdk->Entity2(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = entity2_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "entity2." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set IPGEOLOCATIONAPI__TEST_ENTITY__ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $entity2_ref01_ent = $client->Entity2(null);
        $entity2_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.entity2"), "entity2_ref01"));

        [$entity2_ref01_data_result, $err] = $entity2_ref01_ent->create($entity2_ref01_data, null);
        $this->assertNull($err);
        $entity2_ref01_data = Helpers::to_map($entity2_ref01_data_result);
        $this->assertNotNull($entity2_ref01_data);

    }
}

function entity2_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/entity2/Entity2TestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = IpGeolocationApi2SDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["entity201", "entity202", "entity203"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("IPGEOLOCATIONAPI__TEST_ENTITY__ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "IPGEOLOCATIONAPI__TEST_ENTITY__ENTID" => $idmap,
        "IPGEOLOCATIONAPI__TEST_LIVE" => "FALSE",
        "IPGEOLOCATIONAPI__TEST_EXPLAIN" => "FALSE",
        "IPGEOLOCATIONAPI__APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["IPGEOLOCATIONAPI__TEST_ENTITY__ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["IPGEOLOCATIONAPI__TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["IPGEOLOCATIONAPI__APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new IpGeolocationApi2SDK(Helpers::to_map($merged_opts));
    }

    $live = $env["IPGEOLOCATIONAPI__TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["IPGEOLOCATIONAPI__TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
