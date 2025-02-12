import { memo } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box } from '@mui/system';
import { useMapContext } from 'modules/dashboard/contexts/SelectItemContext';

const SelectViewMap = () => {
  const { typeView, setTypeView, setSelect } = useMapContext();

  const handleChange = (event: SelectChangeEvent) => {
    setTypeView(event.target.value);
    setSelect(null)
  };

  return (
    <Box sx={{ m: 1, minWidth: 60, maxHeight: 60 }}>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={typeView}
        onChange={handleChange}
      >
        <MenuItem value={'Almacenes'}>Almacenes</MenuItem>
        <MenuItem value={'Centro distribución'}>Centro distribución</MenuItem>
      </Select>
    </Box>
  );
};

export default memo(SelectViewMap);
