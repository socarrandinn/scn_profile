import { memo, SyntheticEvent, useState } from 'react';
import { FlexBox, SearchField, SwitchField } from '@dfl/mui-react-common';
import { withCodeSample } from 'hocs/withCodeSample';
import { code } from './code';
import { DemoProps } from '../../../../../types';

const Demo = (props: DemoProps) => {
  const [hideIcon, setHideIcon] = useState(false);

  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
      <SwitchField
        label={'Hide Icon'}
        value={hideIcon}
        onChange={(evt: SyntheticEvent<Element, Event>, checked) => {
          setHideIcon(checked);
        }}
      />
      <SearchField hideIcon={hideIcon} />
    </FlexBox>
  );
};

Demo.defaultProps = {
  code,
};

export default memo(withCodeSample(Demo));
