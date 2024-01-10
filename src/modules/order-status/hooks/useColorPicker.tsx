import { useState, useCallback } from 'react';

const useColorPicker = (initialColor: string) => {
  const [color, setColor] = useState<string>(initialColor);
  const [open, setOpen] = useState(false);

  const [red, setRed] = useState({
    rgb: 0,
    hex: '00',
  });
  const [green, setGreen] = useState({
    rgb: 0,
    hex: '00',
  });
  const [blue, setBlue] = useState({
    rgb: 0,
    hex: '00',
  });

  const selectColor = useCallback((selectedColor: string) => {
    setColor(selectedColor);
  }, []);

  return {
    selectedColor: color,
    selectColor,
    red,
    setRed,
    green,
    setGreen,
    blue,
    setBlue,
    open,
    setOpen
  };
};

export default useColorPicker;
