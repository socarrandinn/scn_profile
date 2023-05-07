import { memo, useCallback, useState } from 'react';
import { SelectField, FlexBox } from '@dfl/mui-react-common';
import MenuItem from '@mui/material/MenuItem';
import { FormControlLabel, SelectChangeEvent, Switch } from '@mui/material';
import Box from '@mui/material/Box';

const Demo = () => {
  const [dark, setDark] = useState(false);
  const [hasHelperText, setHasHelperText] = useState(true);
  const [selectedFruit, setSelectedFruit] = useState('Apple');

  const handleChange = useCallback((event: SelectChangeEvent<any>) => {
    setSelectedFruit(event.target.value);
  }, []);

  return (
    <FlexBox gap={4} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
      <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
        <FormControlLabel
          control={
            <Switch
              checked={dark}
              onChange={(evt) => {
                setDark(evt.target.checked);
              }}
            />
          }
          label='Dark Style'
        />
        <FormControlLabel
          control={
            <Switch
              checked={hasHelperText}
              onChange={(evt) => {
                setHasHelperText(evt.target.checked);
              }}
            />
          }
          label='Has Helper?'
        />
      </FlexBox>
      <Box sx={{ width: '100%' }}>
        <SelectField
          label='Fruts'
          helperText={hasHelperText ? 'A list of delicious fruits' : undefined}
          dark={dark}
          value={selectedFruit}
          onChange={handleChange}
        >
          <MenuItem value={'Apple'}>Apple</MenuItem>
          <MenuItem value={'Pineapple'}>Pineapple</MenuItem>
          <MenuItem value={'Pear'}>Pear</MenuItem>
          <MenuItem value={'Banana'}>Banana</MenuItem>
          <MenuItem value={'Watermelon'}>Watermelon</MenuItem>
          <MenuItem value={'Strawberry'}>Strawberry</MenuItem>
        </SelectField>
      </Box>
    </FlexBox>
  );
};

export default memo(Demo);
