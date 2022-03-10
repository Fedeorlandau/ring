import { Breakpoints } from './breakpoints';
import { FontFamilies } from './fontFamilies';
import { Typography } from './typography';

export type DesignTokens = {
  global: Theme;
};

type Theme = {
  breakpoints: Breakpoints;
  fontFamilies: FontFamilies;
  typography: Typography;
};
