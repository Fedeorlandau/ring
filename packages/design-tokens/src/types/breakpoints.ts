export type Breakpoints = {
  xs: Breakpoint;
  sm: Breakpoint;
  md: Breakpoint;
  lg: Breakpoint;
  xl: Breakpoint;
};

type Breakpoint = {
  type: string;
  value: string;
};
