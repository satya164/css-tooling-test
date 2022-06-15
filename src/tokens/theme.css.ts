import { createTheme } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

const mediumWidth = 600;
const largeWidth = 960;

export const [themeClass, vars] = createTheme({
  colors: {
    primary: 'tomato',
    primaryText: 'white',
  },
  paddingHorizontal: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
  },
  paddingVertical: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
  },
});

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': `screen and (min-width: ${mediumWidth}px)` },
    desktop: { '@media': `screen and (min-width: ${largeWidth}px)` },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'desktop'],
  properties: {
    paddingLeft: vars.paddingHorizontal,
    paddingRight: vars.paddingHorizontal,
    paddingTop: vars.paddingVertical,
    paddingBottom: vars.paddingVertical,
  },
  shorthands: {
    paddingHorizontal: ['paddingLeft', 'paddingRight'],
    paddingVertical: ['paddingTop', 'paddingBottom'],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);
