import { useState, useCallback } from 'react';

const useColorPicker = () => {
  const [color, setColor] = useState<string>('#000');

  const selectColor = useCallback((selectedColor: string) => {
    setColor(selectedColor);
  }, []);

  return {
    selectedColor: color,
    selectColor,
  };
};

export default useColorPicker;
