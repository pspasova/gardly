/**
 * Returns true when the given route is the active one for the current pathname.
 * The root route "/" requires an exact match; all others use startsWith.
 */
export function isRouteActive(pathname: string, route: string): boolean {
  return route === '/' ? pathname === '/' : pathname.startsWith(route);
}
