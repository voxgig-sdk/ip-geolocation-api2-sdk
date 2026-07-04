-- Typed models for the IpGeolocationApi2 SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Entity1
---@field asn? table
---@field city? string
---@field continent? string
---@field country string
---@field ip string
---@field location? table
---@field postal? string
---@field subdivision? string

---@class Entity1LoadMatch

---@class Entity2

---@class Entity2CreateData

---@class Entity3
---@field asn? table
---@field city? string
---@field continent? string
---@field country string
---@field ip string
---@field location? table
---@field postal? string
---@field subdivision? string

---@class Entity3LoadMatch
---@field id string

---@class Info
---@field data_source? table
---@field last_updated? string
---@field version? string

---@class InfoListMatch

local M = {}

return M
