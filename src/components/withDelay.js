import React, { useState } from 'react';
import { useDelay } from '../hooks';

/**
 * Higher-ordered function that can be used to add a delay
 * to any component (as long as it has a `delay` prop.
 *
 * @param {component} Component The component to delay.
 * @return {component}          The new component with delay applied.
 */
const withDelay = Component => (props) => {
  const [show, setShow] = useState(false);

  useDelay(() => {
    setShow(true);
  }, props.delay);

  return show && <Component {...props} />
};

export default withDelay;
