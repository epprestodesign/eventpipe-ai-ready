import { useState, useEffect } from 'react';

/**
 * useDebounce — delays propagating a value until it has stopped changing.
 *
 * Usage (MA-2: debounced search/filter input):
 *
 * ```tsx
 * const [query, setQuery] = useState('');
 * const debouncedQuery = useDebounce(query, 300);
 *
 * useEffect(() => {
 *   if (debouncedQuery) fetchResults(debouncedQuery);
 * }, [debouncedQuery]);
 * ```
 *
 * @param value  - The value to debounce.
 * @param delayMs - Debounce delay in milliseconds.
 * @returns The debounced value — updates only after `delayMs` has elapsed
 *          with no change to `value`.
 */
export function useDebounce<T>(value: T, delayMs: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delayMs);
    return () => clearTimeout(timer);
  }, [value, delayMs]);

  return debouncedValue;
}
