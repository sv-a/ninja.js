import React from 'react';

export const Table = React.forwardRef((props, ref) => (
  <table {...props} ref={ref}>
    <tbody>
      {props.children}
    </tbody>
  </table>
))