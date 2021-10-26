type colorType = {
  background: string;
  black: string;
  blue: string;
  blueLight: string;
  grey: string;
  greyBold: string;
  greyLight: string;
  orange: string;
  purpleBold: string;
  white: string;
};

type colorTheme = {
  colors: colorType;
};

const theme: colorTheme = {
  colors: {
    background: '#FFF',
    black: '#00000000',
    blue: '#8EB5F0',
    blueLight: '#97DFFC',
    grey: '#C1CAD6',
    greyBold: '#3D3D4D',
    greyLight: '#e4e4eb',
    orange: '#f9b666',
    purpleBold: '#4E148C',
    white: '#FFFFFF',
  },
};

export type ThemeType = typeof theme;
export { theme };
export default ThemeType;
