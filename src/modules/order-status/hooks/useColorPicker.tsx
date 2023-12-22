import { useState, useCallback } from 'react';

const useColorPicker = (initialColor: string) => {
  const [color, setColor] = useState<string>(initialColor);

  const selectColor = useCallback((selectedColor: string) => {
    setColor(selectedColor);
  }, []);

  return {
    selectedColor: color,
    selectColor,
  };
};

export default useColorPicker;
