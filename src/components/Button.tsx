import * as React from 'react';

type Props = React.ComponentPropsWithoutRef<'button'>;

export function Button(props: Props) {
  return <button {...props} />;
}
