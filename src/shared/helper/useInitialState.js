import { useEffect, useRef } from "react";
/*ignore jslint start*/

export const useInitialState = (state) => {
  const previousState = useRef();
  useEffect(() => {
    previousState.current = state;
  }, []);
  return () => previousState.current;
  };
