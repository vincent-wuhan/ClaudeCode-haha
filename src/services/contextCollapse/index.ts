// Stub for ANT-internal contextCollapse service, absent in external builds.
// All call sites are gated behind feature('CONTEXT_COLLAPSE') (compiled out)
// except the TUI-only CollapseLabel, which never renders in --print/sdk mode.

export interface ContextCollapseStats {
  collapsedTokens: number
}

export function getStats(): ContextCollapseStats {
  return { collapsedTokens: 0 }
}

export function subscribe(_cb: () => void): () => void {
  return () => {}
}

export function isContextCollapseEnabled(): boolean {
  return false
}

export function isWithheldPromptTooLong(_msg: unknown): boolean {
  return false
}

export async function applyCollapsesIfNeeded<T>(messages: T): Promise<T> {
  return messages
}

export async function recoverFromOverflow(...args: unknown[]): Promise<unknown> {
  return args[0]
}
