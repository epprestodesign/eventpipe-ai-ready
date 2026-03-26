/**
 * Icon Registry — Phase 1 approved set.
 *
 * This is the ONLY file in the codebase that imports @mui/icons-material.
 * All consuming code must use <Icon name="..." /> — never import MUI icons directly.
 *
 * Governance: adding an icon requires a PR to this file with justification.
 * See docs/decisions/006-icon-system.md for the full governance contract.
 *
 * Naming: semantic kebab-case names that describe meaning, not visual shape.
 * "chevron-down" not "expand-more". "success" not "check-circle-outline".
 */

// ─── Foundational ────────────────────────────────────────────────────────────
import CloseIcon            from '@mui/icons-material/Close';
import CheckIcon            from '@mui/icons-material/Check';
import MenuIcon             from '@mui/icons-material/Menu';

// ─── Status / Feedback ───────────────────────────────────────────────────────
import SuccessIcon          from '@mui/icons-material/CheckCircleOutline';
import WarningIcon          from '@mui/icons-material/WarningAmber';
import ErrorIcon            from '@mui/icons-material/ErrorOutline';
import InfoIcon             from '@mui/icons-material/InfoOutlined';

// ─── Navigation ──────────────────────────────────────────────────────────────
import ChevronDownIcon      from '@mui/icons-material/ExpandMore';
import ChevronUpIcon        from '@mui/icons-material/ExpandLess';
import ChevronRightIcon     from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon      from '@mui/icons-material/ChevronLeft';
import ArrowBackIcon        from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon     from '@mui/icons-material/ArrowForward';

// ─── Action ──────────────────────────────────────────────────────────────────
import AddIcon              from '@mui/icons-material/Add';
import RemoveIcon           from '@mui/icons-material/Remove';
import DeleteIcon           from '@mui/icons-material/DeleteOutline';
import EditIcon             from '@mui/icons-material/EditOutlined';
import SearchIcon           from '@mui/icons-material/Search';
import DownloadIcon         from '@mui/icons-material/Download';
import UploadIcon           from '@mui/icons-material/Upload';
import VisibilityIcon       from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffIcon    from '@mui/icons-material/VisibilityOffOutlined';
import SettingsIcon         from '@mui/icons-material/SettingsOutlined';
import PersonIcon           from '@mui/icons-material/PersonOutline';
import CalendarIcon         from '@mui/icons-material/CalendarToday';
import FilterIcon           from '@mui/icons-material/FilterList';
import SortIcon             from '@mui/icons-material/UnfoldMore';          // neutral sort indicator (column sortable, no direction active)
import MoreVertIcon         from '@mui/icons-material/MoreVert';           // overflow / row action trigger
import ChevronsRightIcon    from '@mui/icons-material/KeyboardDoubleArrowRight'; // move-all right (TransferList)
import ChevronsLeftIcon     from '@mui/icons-material/KeyboardDoubleArrowLeft';  // move-all left (TransferList)

// ─── Application / Domain ────────────────────────────────────────────────────
// MUI v5 substitutes are noted inline; registry keys remain stable for consumers.
// When upgrading to MUI v6, swap only the import — no consumer changes needed.
import CodeXmlIcon          from '@mui/icons-material/Code';              // requested: code_xml — CodeXml is MUI v6+; Code renders </>
import SupportAgentIcon     from '@mui/icons-material/SupportAgent';
import ConstructionIcon     from '@mui/icons-material/Construction';
import SignatureIcon         from '@mui/icons-material/Draw';              // requested: signature — Signature n/a in MUI 5; Draw is closest
import LibraryBooksIcon     from '@mui/icons-material/LibraryBooks';
import AccountTreeIcon      from '@mui/icons-material/AccountTree';
import StadiumIcon          from '@mui/icons-material/Stadium';
import AirlineSeatFlatIcon  from '@mui/icons-material/AirlineSeatFlat';
import ForkSpoonIcon        from '@mui/icons-material/Restaurant';        // requested: fork_spoon — ForkSpoon n/a in MUI 5; Restaurant renders fork+knife
import ApartmentIcon        from '@mui/icons-material/Apartment';
import BarChart4BarsIcon    from '@mui/icons-material/BarChart';          // requested: bar_chart_4_bars — BarChart4Bars is MUI v6+; BarChart is 3-bar variant
import InventoryIcon        from '@mui/icons-material/InventoryOutlined';
import ConciergeIcon        from '@mui/icons-material/RoomService';       // requested: concierge — Concierge n/a in MUI 5; RoomService is the bell icon
import CalendarMonthIcon    from '@mui/icons-material/CalendarMonth';
import Groups2Icon          from '@mui/icons-material/Groups2';

// ─── Registry map ─────────────────────────────────────────────────────────────
// Key = semantic name used in <Icon name="..." />
// Value = MUI SvgIcon component (path-imported for tree-shaking)

export const iconRegistry = {
  // Foundational
  'close':           CloseIcon,
  'check':           CheckIcon,
  'menu':            MenuIcon,

  // Status / Feedback
  'success':         SuccessIcon,
  'warning':         WarningIcon,
  'error':           ErrorIcon,
  'info':            InfoIcon,

  // Navigation
  'chevron-down':    ChevronDownIcon,
  'chevron-up':      ChevronUpIcon,
  'chevron-right':   ChevronRightIcon,
  'chevron-left':    ChevronLeftIcon,
  'arrow-back':      ArrowBackIcon,
  'arrow-forward':   ArrowForwardIcon,

  // Action
  'add':             AddIcon,
  'remove':          RemoveIcon,
  'delete':          DeleteIcon,
  'edit':            EditIcon,
  'search':          SearchIcon,
  'download':        DownloadIcon,
  'upload':          UploadIcon,
  'visibility':      VisibilityIcon,
  'visibility-off':  VisibilityOffIcon,
  'settings':        SettingsIcon,
  'person':          PersonIcon,
  'calendar':        CalendarIcon,
  'filter':          FilterIcon,
  'sort':            SortIcon,
  'more-vertical':   MoreVertIcon,
  'chevrons-right':  ChevronsRightIcon,
  'chevrons-left':   ChevronsLeftIcon,

  // Application / Domain
  'code-xml':          CodeXmlIcon,
  'support-agent':     SupportAgentIcon,
  'construction':      ConstructionIcon,
  'signature':         SignatureIcon,
  'library-books':     LibraryBooksIcon,
  'account-tree':      AccountTreeIcon,
  'stadium':           StadiumIcon,
  'airline-seat-flat': AirlineSeatFlatIcon,
  'fork-spoon':        ForkSpoonIcon,
  'apartment':         ApartmentIcon,
  'bar-chart-4-bars':  BarChart4BarsIcon,
  'inventory':         InventoryIcon,
  'concierge':         ConciergeIcon,
  'calendar-month':    CalendarMonthIcon,
  'groups-2':          Groups2Icon,
} as const;

export type IconName = keyof typeof iconRegistry;
