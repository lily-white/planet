import * as React from 'react';
import { SxProps } from '@material-ui/system';
import { Theme } from '..';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';

export type Padding = 'normal' | 'checkbox' | 'none';

export type Size = 'small' | 'medium';

export interface TableTypeMap<P = {}, D extends React.ElementType = 'table'> {
  props: P & {
    /**
     * The content of the table, normally `TableHead` and `TableBody`.
     */
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: {
      /** Styles applied to the root element. */
      root?: string;
      /** Styles applied to the root element if `stickyHeader={true}`. */
      stickyHeader?: string;
    };
    /**
     * Allows TableCells to inherit padding of the Table.
     * @default 'normal'
     */
    padding?: Padding;
    /**
     * Allows TableCells to inherit size of the Table.
     * @default 'medium'
     */
    size?: Size;
    /**
     * Set the header sticky.
     *
     * ⚠️ It doesn't work with IE11.
     * @default false
     */
    stickyHeader?: boolean;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  defaultComponent: D;
}
/**
 *
 * Demos:
 *
 * - [Tables](https://material-ui.com/components/tables/)
 *
 * API:
 *
 * - [Table API](https://material-ui.com/api/table/)
 */
declare const Table: OverridableComponent<TableTypeMap>;

export type TableClassKey = keyof NonNullable<TableTypeMap['props']['classes']>;

export type TableProps<
  D extends React.ElementType = TableTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<TableTypeMap<P, D>, D>;

export default Table;
