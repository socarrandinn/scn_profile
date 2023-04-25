import { memo, useCallback, useState } from 'react';
import { DateTimePickerField, FlexBox, SwitchField } from '@dfl/mui-react-common';
import Box from '@mui/material/Box';
import { code } from './code';
import withCodeSample from 'hocs/withCodeSample';
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
          <DateTimePickerField
              dark={dark}
              label={'Datetime'}
              value={selectedDate}
              onChange={handleChange}
              size={small ? 'small' : 'medium'}
              helperText={hasHelperText ? 'Helper Datetime Text' : undefined}
          />
        </Box>
      </FlexBox>
  );
};

Demo.defaultProps = {
  code
}

export default memo(withCodeSample(Demo));
