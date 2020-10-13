import { useEffect, useRef } from 'react';

/**
 * Performs an action (callback) after a given delay.
 * Hooks are neat!
 *
 * @param {function} callback The action to be taken.
 * @param {number} delay      The time to wait before taking the action.
 */
export const useDelay = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    let pause = setTimeout(tick, delay);
    return () => clearTimeout(pause);
  }, [delay]);
};
