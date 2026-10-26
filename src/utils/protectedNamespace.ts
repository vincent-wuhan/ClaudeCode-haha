// Stub for ANT-internal protectedNamespace module, absent in external builds.
// Only reached when USER_TYPE === 'ant'; no k8s/COO signals exist locally.

export function checkProtectedNamespace(): boolean {
  return false
}
