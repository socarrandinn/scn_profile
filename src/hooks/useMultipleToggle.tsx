import { useCallback, useState } from 'react';

const defaultStates: Record<string, boolean> = {
  state_1: false,
  state_2: false,
  state_3: false,
};

const useMultipleToggle = (init: Record<string, boolean> = defaultStates) => {
  const [state, setState] = useState<Record<string, boolean>>(init);
  const [allOpen, setOpen] = useState(false)

  const onAllToggle = useCallback(() => {
    setState((prevState) => {
      const newState: Record<string, boolean> = {};
      for (const key in prevState) {
        if (Object.prototype.hasOwnProperty.call(prevState, key)) {
          newState[key] = !allOpen;
        }
      }
      setOpen(!allOpen)

      return newState;
    });
  }, [setOpen, allOpen]);

  const onOneToggle = useCallback((st: string) => {
    setState((prev: any) => ({ ...prev, [st]: !prev[st] }));
  }, []);

  const onOneClose = useCallback((st: string) => {
    setState((prev: any) => ({ ...prev, [st]: false }));
  }, []);

  const onOneOpen = useCallback((st: string) => {
    setState((prev: any) => ({ ...prev, [st]: true }));
  }, []);

  return {
    onAllToggle,
    onOneToggle,
    state,
    onOneClose,
    onOneOpen,
    allOpen,
    setOpen
  };
};

export default useMultipleToggle;


