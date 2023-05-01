import { memo, useCallback, useState } from 'react';
import { DatePickerField, FlexBox, SwitchField } from '@dfl/mui-react-common';
import Box from '@mui/material/Box';
import withCodeSample from 'hocs/withCodeSample';
import { code } from './code';
import { DemoProps } from '../../../../../types';

const Demo = (props: DemoProps) => {
  const [dark, setDark] = useState(false);
  const [small, setSmall] = useState(false);
  const [hasHelperText, setHasHelperText] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = useCallback(
    (value: Date, keyBoardInputData: string) => {
      setSelectedDate(value);
    },
    [setSelectedDate],
  );

  return (
      <FlexBox flexDirection={'column'} gap={4} alignItems={'center'} justifyContent={'center'}>
        <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
          <SwitchField
              label='Dark Style'
              checked={dark}
              onChange={(evt, checked) => {
                setDark(checked);
              }}
          />
          <SwitchField
              label='Small Size'
              checked={small}
              onChange={(evt, checked) => {
                setSmall(checked);
              }}
          />
          <SwitchField
              label='Has Helper Text'
              checked={hasHelperText}
              onChange={(evt, checked) => {
                setHasHelperText(checked);
              }}
          />
        </FlexBox>
        <Box>
          <DatePickerField
              dark={dark}
              label={'Date'}
              value={selectedDate}
              onChange={handleChange}
              size={small ? 'small' : 'medium'}
              helperText={hasHelperText ? 'Helper Date Text' : undefined}
          />
        </Box>
      </FlexBox>
  );
};

Demo.defaultProps = {
  code
}

export default memo(withCodeSample(Demo));
