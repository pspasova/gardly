/**
 * Returns the value of a query-string parameter from the current URL,
 * or null if absent.
 */
export function getSearchParam(key: string): string | null {
  return new URLSearchParams(window.location.search).get(key);
}
