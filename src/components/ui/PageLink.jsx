import React, { forwardRef } from 'react';

export const PageLink = forwardRef((props, ref) => (
  <button
    {...props}
    ref={ref}
    className={`page-link ${props.className}`}
  >
    {props.children}
  </button>
))