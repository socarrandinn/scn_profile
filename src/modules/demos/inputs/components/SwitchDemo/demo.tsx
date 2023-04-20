import { memo } from 'react';
import { FlexBox, SwitchField } from '@dfl/mui-react-common';

const Demo = () => {
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
};

export default memo(Demo);
