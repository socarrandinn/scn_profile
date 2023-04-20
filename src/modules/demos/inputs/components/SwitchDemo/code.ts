import { LANGUAGE } from 'constants/code-block';

export const searchFieldSampleCode = [
  {
    language: LANGUAGE.TSX,
    code: `import { SwitchField, FlexBox } from '@dfl/mui-react-common';
import { Switch } from '@mui/material';

export default function Demo() {

  return (
    <FlexBox flexDirection={'column'} gap={4} alignItems={'center'} justifyContent={'center'}>
      <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
        <SwitchField label={'Sample Label'} />
      </FlexBox>
        <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
            <SwitchField label={'Small Switch'} size={'small'}/>
            <SwitchField label={'Medium Switch'} size={'medium'}/>
        </FlexBox>
        <FlexBox gap={4} alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'}>
            <SwitchField label={'Default'} color={'default'}/>
            <SwitchField label={'Primary'} color={'primary'}/>
            <SwitchField label={'Secondary'} color={'secondary'}/>
            <SwitchField label={'Success'} color={'success'}/>
            <SwitchField label={'Info'} color={'info'}/>
            <SwitchField label={'Warning'} color={'warning'}/>
            <SwitchField label={'Error'} color={'error'}/>
        </FlexBox>
        <FlexBox gap={4} alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'}>
            <SwitchField label={'Start'} labelPlacement={'start'}/>
            <SwitchField label={'Top'} labelPlacement={'top'}/>
            <SwitchField label={'End'} labelPlacement={'end'}/>
            <SwitchField label={'Bottom'} labelPlacement={'bottom'}/>
        </FlexBox>
    </FlexBox>
  );
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
      </FlexBox>
      <Box>
        <DatePickerField
          dark={dark}
          label={'Date'}
          value={selectedDate}
          onChange={handleChange}
          size={small ? 'small' : 'medium'}
        />
      </Box>
    </FlexBox>
  );
}


`,
  },
];
