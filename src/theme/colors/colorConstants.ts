export const YELLOW = '#FFE580';
export const BLUE = '#96BFFF';
export const PALE_BLUE = '#B1B9FF';
export const CYAN = '#ADE4F7';
export const BRIGHT_GREEN = '#94E8A2';
export const GREEN = '#CDE894';
export const PURPLE = '#DBA8ED';
export const PINK = '#F5CDED';
export const RED = '#FFAD9D';
export const BEIGE = '#E8C694';
export const WHITE = '#FFFFFF';
export const BLACK = '#000000';

export enum ARBOLUS_COLORS {
  bColorBaseDark = '#000A3F',
  bColorBaseOrange = '#FF5A3A',
  bColorBasePurple = '#6157FC',
  bColorBaseBlue = '#0062FF',
  bColorBaseWhite = '#FFFFFF',
  bColorBaseBlack = '#000000',
  bColorSecondaryGreyDark = '#80849F',
  bColorSecondaryGreyMid = '#CCCED9',
  bColorSecondaryGreyLight = '#F2F2F5',
  bColorAccentPurpleDark = '#4E48D6',
  bColorAccentPurpleMid = '#7168FC',
  bColorAccentPurpleLight = '#A09AFD',
  bColorAccentOrangeDark = '#CC4A3B',
  bColorSecondaryAmber = '#FFCC00',
  bColorAccentAmberDark = '#E5BA0F',
  bColorSecondaryGreen = '#4CD964',
  bColorAccentGreenDark = '#3DB05D',
  bColorGrayIcon = '#80859F',
  bColorBaseDarkOp = '#000a3f1a',
  bColorSecondaryGreyLightBackground = '#FAFAFD',
  angleDefaultBackgroundColor = '#F0F0F0',
  angleDefaultColor = '#BEBEBE'
}

export type PALETTE =
  | typeof ARBOLUS_COLORS.bColorBaseDark
  | typeof ARBOLUS_COLORS.bColorBaseOrange
  | typeof ARBOLUS_COLORS.bColorBasePurple
  | typeof ARBOLUS_COLORS.bColorBaseBlue
  | typeof ARBOLUS_COLORS.bColorBaseWhite
  | typeof ARBOLUS_COLORS.bColorSecondaryGreyDark
  | typeof ARBOLUS_COLORS.bColorSecondaryGreyMid
  | typeof ARBOLUS_COLORS.bColorSecondaryGreyLight
  | typeof ARBOLUS_COLORS.bColorAccentPurpleDark
  | typeof ARBOLUS_COLORS.bColorAccentPurpleMid
  | typeof ARBOLUS_COLORS.bColorAccentPurpleLight
  | typeof ARBOLUS_COLORS.bColorAccentOrangeDark
  | typeof ARBOLUS_COLORS.bColorSecondaryAmber
  | typeof ARBOLUS_COLORS.bColorAccentAmberDark
  | typeof ARBOLUS_COLORS.bColorSecondaryGreen
  | typeof ARBOLUS_COLORS.bColorGrayIcon
  | typeof ARBOLUS_COLORS.bColorAccentGreenDark
  | typeof ARBOLUS_COLORS.bColorSecondaryGreyLightBackground;

export type COLOR =
  | typeof YELLOW
  | typeof BLUE
  | typeof PALE_BLUE
  | typeof CYAN
  | typeof BRIGHT_GREEN
  | typeof GREEN
  | typeof PURPLE
  | typeof PINK
  | typeof BEIGE
  | typeof RED
  | typeof WHITE
  | typeof BLACK;
