import * as React from 'react';
import styles from './Button.module.scss';

type Props = React.ComponentPropsWithoutRef<'button'>;

export function Button(props: Props) {
  return <button {...props} className={styles.button} />;
}
