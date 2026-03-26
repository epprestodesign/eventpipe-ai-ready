import { createContext, useContext } from 'react';
import type { TableSize } from './Table.types';

/**
 * TableSizeContext — carries the Table-level size prop down to all
 * TableCell and TableHeaderCell descendants without prop drilling.
 *
 * Default: 'md' — used when a cell renders outside a Table provider.
 */
export const TableSizeContext = createContext<TableSize>('md');

/** Reads the nearest Table size from context. */
export const useTableSize = (): TableSize => useContext(TableSizeContext);
