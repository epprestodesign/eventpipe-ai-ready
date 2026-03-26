# Autocomplete

**Package:** `@eventpipe/components` | **MUI Base:** `Autocomplete`

## TypeScript Interface
```ts
interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false
> {
  options: T[];
  size?: 'sm' | 'md' | 'lg';       // EpSize3
  value?: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>;
  defaultValue?: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>;
  inputValue?: string;
  multiple?: Multiple;
  freeSolo?: FreeSolo;
  disableClearable?: DisableClearable;
  loading?: boolean;
  loadingText?: ReactNode;
  noOptionsText?: ReactNode;
  filterOptions?: (options: T[], state: FilterOptionsState<T>) => T[];
  getOptionLabel?: (option: T) => string;
  getOptionKey?: (option: T) => string | number;
  isOptionEqualToValue?: (option: T, value: T) => boolean;
  renderOption?: (props: HTMLAttributes<HTMLLIElement>, option: T) => ReactNode;
  renderInput: (params: AutocompleteRenderInputParams) => ReactNode;
  renderTags?: (value: T[], getTagProps: AutocompleteRenderGetTagProps) => ReactNode;
  onChange?: AutocompleteChangeHandler<T, Multiple, DisableClearable, FreeSolo>;
  onInputChange?: (event: SyntheticEvent, value: string) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  sx?: SxProps;
}
```

## Sizes (3-tier)
`'sm' | 'md' | 'lg'` — default `'md'`. Passed through to rendered `TextField` via `renderInput`.

## Loading State
`loading={true}` shows a spinner in the popup indicator position and `loadingText` in dropdown.

## EP Additions
- `'lg'` size
- Spinner integration for async loading

## Notes
`renderInput` is required (MUI pattern). Typically renders a `TextField` with the provided `params`.
Tags in multiple mode render as `Chip` components by default — `'sm'` size matched to input size.

## Token Consumption
`ep.component.autocomplete.*` and `ep.component.text-field.*` (via renderInput).
