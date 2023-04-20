import { LANGUAGE } from 'constants/code-block';

export const timePickerSampleCode = [
  {
    language: LANGUAGE.TSX,
    code: `import { useCallback, useState } from 'react';
import { TimePickerField, FlexBox } from '@dfl/mui-react-common';
import { FormControlLabel, Switch, Box } from '@mui/material';

export default function Demo() {

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
        <FormControlLabel
          label='Dark Style'
          control={
            <Switch
              checked={dark}
              onChange={(evt) => {
                setDark(evt.target.checked);
              }}
            />
          }
        />
        <FormControlLabel
          label='Small Size'
          control={
            <Switch
              checked={small}
              onChange={(evt) => {
                setSmall(evt.target.checked);
              }}
            />
          }
        />
        <FormControlLabel
          label='Has Helper Text'
          control={
            <Switch
              checked={hasHelperText}
              onChange={(evt) => {
                setHasHelperText(evt.target.checked);
              }}
            />
          }
        />
      </FlexBox>
      <Box>
        <TimePickerField
          dark={dark}
          label={'Date'}
          value={selectedDate}
          onChange={handleChange}
          size={small ? 'small' : 'medium'}
          helperText={hasHelperText ? 'Helper Time Text' : undefined}
        />
      </Box>
    </FlexBox>
  );
};
`,
  },
];
