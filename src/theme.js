import 'typeface-ibm-plex-sans';

const reds = {
  red1: '#FF0000',
};

const blues = {
  blue1: '#232535',
  blue2: '#82B0FD',
  blue3: '#B4BFED',
};

const yellows = {
  yellow1: '#FED138',
  yellow2: '#FED95A',
};

const blacks = {
  black1: '#000000',
  black2: '#465064',
  black3: '#1A1A1A',
};

const greys = {
  grey1: '#F5F5F5',
  grey2: '#C4C4C4',
  grey3: '#666666',
};

const greens = {
  green1: '#bcddd7',
};

const purples = {
  purple1: '#C1B1E9',
};

const white = '#FFFFFF';

const breakpoints = {
  xs: 0,
  sm: 350,
  md: 740,
  lg: 1040,
  xl: 1920,
};

const bolds = {
  bold14: '700 14px IBM Plex Sans',
  bold18: '700 18px IBM Plex Sans',
  bold24: '700 24px IBM Plex Sans',
  bold30: '700 30px IBM Plex Sans',
  bold36: '700 36px IBM Plex Sans',
  bold250: '700 250px IBM Plex Sans',
};

const mediums = {
  medium12: '400 12px IBM Plex Sans',
  medium14: '400 14px IBM Plex Sans',
  medium16: '400 16px IBM Plex Sans',
  medium18: '400 18px IBM Plex Sans',
  medium20: '400 20px IBM Plex Sans',
  medium24: '400 24px IBM Plex Sans',
  medium48: '400 48px IBM Plex Sans',
  medium72: '400 72px IBM Plex Sans',
};

const shadows = {
  shadow1: '0 4px 4px 0px rgba(0, 0, 0, 0.25)',
};

const borders = {
  solidGrey1: '1px solid #c4c4c4',
  solidGrey2: '0.75px solid rgba(214, 220, 227, 0.5)',
  solidRed: '1px solid #FF0000',
};

export default {
  colours: {
    reds,
    blues,
    yellows,
    blacks,
    white,
    greys,
    greens,
    purples,
  },
  breakpoints,
  fonts: {
    ...bolds,
    ...mediums,
  },
  shadows,
  borders,
  pageMargin: '64px 82px 64px 82px',
  mobilePageMargin: '15px 30px 15px 30px',
};
