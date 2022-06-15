import { style } from '@vanilla-extract/css';
import { sprinkles, vars } from '../tokens/theme.css';

export const buttonStyle = style([
  sprinkles({
    paddingHorizontal: ['small', 'medium', 'large'],
    paddingVertical: ['small', 'medium', 'large'],
  }),
  {
    appearance: 'none',
    border: 0,
    backgroundColor: vars.colors.primary,
    color: vars.colors.primaryText,
    cursor: 'pointer',
  },
]);
