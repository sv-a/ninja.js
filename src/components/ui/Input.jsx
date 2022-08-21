import React from 'react'

export const Input = React.forwardRef((props, ref) => (
  <input
    {...props}
    className="form-control"
    ref={ref}
  >
    {props.children}
  </input>
));
