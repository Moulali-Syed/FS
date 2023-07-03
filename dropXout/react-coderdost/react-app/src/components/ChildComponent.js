import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const iRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus: () => iRef.current.focus(),
        showPopUp: () => alert('hi'),
      };
    },
    []
  );
  return (
    <div>
      <input type="text" ref={iRef} />
    </div>
  );
});

export default ChildComponent;
