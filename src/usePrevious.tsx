import * as React from 'react'

export function usePrevious<T>(value: T): T {
    const ref: any = React.useRef();
    React.useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  