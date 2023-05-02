import { memo, useState } from 'react';
import { FlexBox, RadioField } from '@dfl/mui-react-common';
import { withCodeSample } from 'hocs/withCodeSample';
import { code } from './code';
import { DemoProps } from '../../../../../types';

const genders = ['Male', 'Female', 'Other'];

const Demo = (props: DemoProps) => {
  const [selectedValue, setSelectValue] = useState('');

  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
      {/* <RadioGroupField value={selectedValue} radioGroup={'button-group-name'}> */}
      {genders.map((gender: string) => (
        <RadioField
          key={gender}
          label={gender}
          // @ts-ignore
          value={selectedValue}
          checkValue={gender}
          onChange={(event) => {
            setSelectValue(event?.target?.value);
          }}
        />
      ))}
      {/* </RadioGroupField> */}
    </FlexBox>
  );
};

Demo.defaultProps = {
  code,
};

export default memo(withCodeSample(Demo));
