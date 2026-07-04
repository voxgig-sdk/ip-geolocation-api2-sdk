# Entity3 entity test

require "minitest/autorun"
require "json"
require_relative "../IpGeolocationApi2_sdk"
require_relative "runner"

class Entity3EntityTest < Minitest::Test
  def test_create_instance
    testsdk = IpGeolocationApi2SDK.test(nil, nil)
    ent = testsdk.Entity3(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = entity3_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "entity3." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set IPGEOLOCATIONAPI__TEST_ENTITY__ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    entity3_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.entity3")))
    entity3_ref01_data = nil
    if entity3_ref01_data_raw.length > 0
      entity3_ref01_data = Helpers.to_map(entity3_ref01_data_raw[0][1])
    end

    # LOAD
    entity3_ref01_ent = client.Entity3(nil)
    entity3_ref01_match_dt0 = {}
    entity3_ref01_data_dt0_loaded = entity3_ref01_ent.load(entity3_ref01_match_dt0, nil)
    assert !entity3_ref01_data_dt0_loaded.nil?

  end
end

def entity3_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "entity3", "Entity3TestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = IpGeolocationApi2SDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["entity301", "entity302", "entity303"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["IPGEOLOCATIONAPI__TEST_ENTITY__ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "IPGEOLOCATIONAPI__TEST_ENTITY__ENTID" => idmap,
    "IPGEOLOCATIONAPI__TEST_LIVE" => "FALSE",
    "IPGEOLOCATIONAPI__TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["IPGEOLOCATIONAPI__TEST_ENTITY__ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["IPGEOLOCATIONAPI__TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
      },
      extra || {},
    ])
    client = IpGeolocationApi2SDK.new(Helpers.to_map(merged_opts))
  end

  live = env["IPGEOLOCATIONAPI__TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["IPGEOLOCATIONAPI__TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
