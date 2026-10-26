// Stub for ANT-internal cachedMicrocompact, absent in external builds.
// Gated behind feature('CACHED_MICROCOMPACT') which is false in external builds.
export interface CachedMCState {
  enabled: boolean
}
export interface CacheEditsBlock {
  edits: unknown[]
}
export {}
