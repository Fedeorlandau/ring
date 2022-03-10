export type Typography = {
  display: TypographyVariant;
  heading1: TypographyVariant;
  heading2: TypographyVariant;
  heading3: TypographyVariant;
  heading4: TypographyVariant;
  heading5: TypographyVariant;
  heading6: TypographyVariant;
  paragraph: TypographyVariant;
  textBold: TypographyVariant;
  textRegular: TypographyVariant;
};

type TypographyVariant = {
  xs: TypographyProperties;
  sm?: TypographyProperties;
  md?: TypographyProperties;
  lg?: TypographyProperties;
  xl?: TypographyProperties;
};

type TypographyProperties = {
  type: string;
  value: {
    fontFamily: string;
    fontWeight: string;
    lineHeight: string;
    fontSize: string;
    letterSpacing: string;
    paragraphSpacing: string;
    textDecoration: string;
    textCase: string;
  };
};
