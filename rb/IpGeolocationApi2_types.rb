# frozen_string_literal: true

# Typed models for the IpGeolocationApi2 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Entity1 entity data model.
#
# @!attribute [rw] asn
#   @return [Hash, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] continent
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String]
#
# @!attribute [rw] ip
#   @return [String]
#
# @!attribute [rw] location
#   @return [Hash, nil]
#
# @!attribute [rw] postal
#   @return [String, nil]
#
# @!attribute [rw] subdivision
#   @return [String, nil]
Entity1 = Struct.new(
  :asn,
  :city,
  :continent,
  :country,
  :ip,
  :location,
  :postal,
  :subdivision,
  keyword_init: true
)

# Request payload for Entity1#load.
#
# @!attribute [rw] field
#   @return [String, nil]
Entity1LoadMatch = Struct.new(
  :field,
  keyword_init: true
)

# Entity2 entity data model.
class Entity2
end

# Request payload for Entity2#create.
#
# @!attribute [rw] field
#   @return [String, nil]
Entity2CreateData = Struct.new(
  :field,
  keyword_init: true
)

# Entity3 entity data model.
#
# @!attribute [rw] asn
#   @return [Hash, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] continent
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] ip
#   @return [String]
#
# @!attribute [rw] location
#   @return [Hash, nil]
#
# @!attribute [rw] postal
#   @return [String, nil]
#
# @!attribute [rw] subdivision
#   @return [String, nil]
Entity3 = Struct.new(
  :asn,
  :city,
  :continent,
  :country,
  :id,
  :ip,
  :location,
  :postal,
  :subdivision,
  keyword_init: true
)

# Request payload for Entity3#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] field
#   @return [String, nil]
Entity3LoadMatch = Struct.new(
  :id,
  :field,
  keyword_init: true
)

# Info entity data model.
#
# @!attribute [rw] dataSources
#   @return [Array, nil]
#
# @!attribute [rw] lastUpdated
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
Info = Struct.new(
  :dataSources,
  :lastUpdated,
  :version,
  keyword_init: true
)

# Request payload for Info#list.
#
# @!attribute [rw] dataSources
#   @return [Array, nil]
#
# @!attribute [rw] lastUpdated
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
InfoListMatch = Struct.new(
  :dataSources,
  :lastUpdated,
  :version,
  keyword_init: true
)

