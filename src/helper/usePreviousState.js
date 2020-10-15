import { useEffect, useRef } from "react";

export const usePreviousState = (state) => {
  const previousState = useRef();
  useEffect(() => {
    previousState.current = state;
  }, [state]);
  return previousState.current;
};

