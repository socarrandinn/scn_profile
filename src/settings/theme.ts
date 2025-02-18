import { THEMES } from '@dfl/mui-react-common';
import { blue, grey, orange, red } from '@mui/material/colors';
import { colors, createTheme, lighten, Theme } from '@mui/material';
import { components } from './components';

export const RED = '#F84842';
export const GREEN = '#65BE46';
export const GRAY = '#646D82';
export const WARNING = colors.deepOrange['500'];

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    formLabel: string;
    link: string;
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Extend color prop on components
declare module '@mui/material/Chip' {
  export interface ChipPropsColorOverrides {
    opacity: true;
  }
}
// #fdfdfd59

export const common = createTheme({
  components: {
    ...components,
    MuiAvatar: {
      styleOverrides: {
        root: {
          '.MuiAvatar-img': {
            objectPosition: 'top',
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme: { palette } }) => ({
          background: palette.mode === 'light' ? lighten(palette.primary.light, 0.8) : grey['800'],

          '.MuiTableCell-root,.MuiTableSortLabel-root': {
            // color: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          '&.row-warning': {
            background: theme.palette.mode === 'light' ? lighten(theme.palette.warning.light, 0.8) : orange['800'],
          },
          '&.row-error': {
            background: theme.palette.mode === 'light' ? lighten(theme.palette.error.light, 0.7) : red['800'],
          },
          '&.row-success': {
            background: theme.palette.mode === 'light' ? lighten(theme.palette.error.light, 0.7) : blue['800'],
          },
        }),
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          '.MuiButtonBase-root': {
            minWidth: 20,
            textTransform: 'none',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        ':root, :before, :after': {
          '--primary-color': `${theme.palette.primary.main} !important`,
        },
        '.truncate': {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        },
        '.phone-input-large, .phone-input-middle': {
          '.react-tel-input': {
            'input.form-control': {
              padding: '16px 14px 16px 58px!important',
            },
          },
        },
        '.phone-input-small': {
          '.react-tel-input': {
            'input.form-control': {
              padding: '9px 14px 7px 58px!important',
            },
          },
        },
        '.react-tel-input': {
          '.special-label': {
            fontSize: '11px!important',
          },
        },
      }),
    },
  },
  typography: {
    h1: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    h2: {
      fontSize: 18,
      fontWeight: 500,
    },
    h3: {
      fontSize: 18,
      fontWeight: 500,
    },
    body1: {
      fontSize: 14,
    },
    h6: {
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1.5,
      whiteSpace: 'normal',
      textTransform: 'none',
    },
  },
});

const LIGHT = {
  ...common,
  palette: {
    mode: THEMES.LIGHT,
    sidebar: {
      background: '#fff',
      color: 'secondary.main',
      activeColor: 'secondary.main',
      active: 'primary.light',
    },
    error: {
      main: '#F84842',
    },
    success: {
      main: '#72B62F',
      contrastText: '#fff',
    },
    spaceSelector: '#f3f4f9',
    primary: {
      main: '#65BE46',
      light: '#C9DDBA',
      contrastText: '#fff',
    },
    opacity: {
      main: '#fdfdfd59',
      contrastText: '#fff',
    },
    secondary: {
      ...grey,
      100: '#EDEEF0',
      200: '#E9E9E9',
      main: grey['900'],
      light: grey['400'],
    },
    neutral: {
      main: '#F4F5F6',
      contrastText: '#fff',
    },
    info: {
      main: '#37AEFF',
      contrastText: '#fff',
    },
    warning: {
      main: '#FDA20A',
      contrastText: '#fff',
    },
    background: {
      default: '#f3f4f9',
      paper: '#fff',
    },
    text: {},
    formLabel: '#000000de',
    // link: '#1a0dab',
  },
};

const DARK = {
  ...common,
  palette: {
    mode: THEMES.DARK,
    sidebar: '#111827',
    spaceSelector: '#222b36',
    background: {
      default: '#1e2732',
      paper: '#222b36',
    },
    primary: {
      main: '#90caf9',
      light: '#363e48',
    },
    opacity: {
      main: '#fdfdfd59',
      contrastText: '#fff',
    },
    secondary: {
      ...grey,
      main: grey['400'],
      light: grey['800'],
    },
    neutral: {
      main: grey['800'],
    },
    formLabel: '#fff',
    link: '#8ab4f8',
  },
};

export const THEME_SETTING = {
  [THEMES.LIGHT]: LIGHT,
  [THEMES.DARK]: DARK,
};
