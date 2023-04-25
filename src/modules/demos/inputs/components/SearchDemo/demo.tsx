import { memo, SyntheticEvent, useState } from 'react';
import { FlexBox, SearchField, SwitchField } from '@dfl/mui-react-common';
import { CodeProps, withCodeSample } from 'hocs/withCodeSample';
import { code } from './code';

type Props = {
  code?: CodeProps[];
};

const OutlinedButtonCodeDemo = (props: Props) => {
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

OutlinedButtonCodeDemo.defaultProps = {
  code,
}

export default memo(withCodeSample(OutlinedButtonCodeDemo));
