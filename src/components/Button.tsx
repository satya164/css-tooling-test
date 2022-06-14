import * as React from 'react';
import styles from './Button.module.css';

type Props = React.ComponentPropsWithoutRef<'button'>;

export function Button(props: Props) {
  return <button {...props} className={styles.button} />;
}
