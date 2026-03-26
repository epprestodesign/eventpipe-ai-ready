# Phase 2 Component Index

Components planned for Phase 2. Each requires a full spec before implementation begins.
Template: use Phase 1 component specs as the spec format reference.

## Components

| Component         | MUI Base          | Key EP Considerations                          |
|-------------------|-------------------|-------------------------------------------------|
| `AppBar`          | AppBar            | Position sticky/fixed, elevation tokens         |
| `Drawer`          | Drawer            | Temporary/permanent/persistent variants, focus trap |
| `Accordion`       | Accordion         | Compound (Summary, Details), controlled/uncontrolled |
| `Stepper`         | Stepper           | Compound (Step, StepLabel, StepContent), orientation |
| `Breadcrumbs`     | Breadcrumbs       | Separator customization, max items collapse     |
| `Skeleton`        | Skeleton           | animation variant, responsive sizing            |
| `Backdrop`        | Backdrop          | Usually composed inside Dialog/Drawer           |
| `Paper`           | Paper             | elevation token mapping, variant                |
| `Divider`         | Divider           | orientation, text child support                 |
| `LinearProgress`  | LinearProgress     | EpSize5 equivalent height tokens, buffer variant|
| `ButtonGroup`     | ButtonGroup       | size/variant must match Button spec exactly     |
| `FAB`             | Fab               | size (sm/md/lg/xl), speed dial integration      |
| `Rating`          | Rating            | size (sm/md/lg), precision, read-only           |
| `ToggleButton`    | ToggleButton + Group | exclusive/multiple, value type, size          |

## Notes
- Phase 2 begins after Phase 1 is fully shipped and stable
- Each Phase 2 component must go through Lab before graduating
- `ButtonGroup` size/variant must be kept in strict sync with `Button` spec
- `LinearProgress` needs its own size approach — height-based, not padding-based
