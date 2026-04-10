/**
 * Parses a human-readable allowance date string (e.g. "Friday 10 Apr") into a
 * YYYY-MM-DD ISO string suitable for <input type="date">. Assumes the current year.
 * Returns '' if parsing fails.
 */
export function parseToIso(formatted: string): string {
  try {
    const withYear = `${formatted.split(' ').slice(1).join(' ')} ${new Date().getFullYear()}`;
    const d = new Date(withYear + 'T12:00:00');
    if (!isNaN(d.getTime())) return d.toISOString().split('T')[0];
  } catch {}
  return '';
}

/**
 * Formats a YYYY-MM-DD ISO string into "Weekday D Mon" (e.g. "Friday 10 Apr"),
 * using noon to avoid timezone-driven off-by-one errors.
 */
export function formatFromIso(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso + 'T12:00:00');
  const weekday = d.toLocaleDateString('en-GB', { weekday: 'long' });
  const day = d.getDate();
  const month = d.toLocaleDateString('en-GB', { month: 'short' });
  return `${weekday} ${day} ${month}`;
}
