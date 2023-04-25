import { memo, SyntheticEvent, useCallback, useState } from 'react';
import { FlexBox, SelectField, SwitchField } from '@dfl/mui-react-common';
import { Box, MenuItem, SelectChangeEvent } from '@mui/material';
import { DemoProps } from '../../../../../types';
import WithCodeSample from 'hocs/withCodeSample';
import { code } from './code';

const Demo = (props: DemoProps) => {
  const [dark, setDark] = useState(false);
  const [hasHelperText, setHasHelperText] = useState(true);
  const [selectedFruit, setSelectedFruit] = useState('Apple');

  const handleChange = useCallback((event: SelectChangeEvent<any>) => {
    setSelectedFruit(event.target.value);
  }, []);

  return (
      <FlexBox gap={4} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
          <SwitchField
              label={'Dark Style'}
              value={dark}
              onChange={(evt: SyntheticEvent<Element, Event>, checked) => {
                setDark(checked);
              }}
          />
          <SwitchField
              label={'Has helper Text'}
              value={hasHelperText}
              onChange={(evt: SyntheticEvent<Element, Event>, checked) => {
                setHasHelperText(checked);
              }}
          />
        </FlexBox>
        <Box sx={{ width: '100%' }}>
          <SelectField
              label="Fruts"
              helperText={hasHelperText ? 'A list of delicious fruits' : undefined}
              dark={dark}
              value={selectedFruit}
              onChange={handleChange}>
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

Demo.defaultProps = {
  code,
}

export default memo(WithCodeSample(Demo));
