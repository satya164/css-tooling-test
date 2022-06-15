import * as React from 'react';
import { buttonStyle } from './Button.css';

type Props = React.ComponentPropsWithoutRef<'button'>;

export function Button(props: Props) {
  return <button {...props} className={buttonStyle} />;
}
