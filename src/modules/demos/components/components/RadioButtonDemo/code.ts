import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: `import { useState } from 'react';
import { FlexBox, RadioField, RadioGroupField } from '@dfl/mui-react-common';

const genders = ['Male', 'Female', 'Other'];

const Demo = () => {
  const [selectedValue, setSelectValue] = useState('');

  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
      <RadioGroupField value={selectedValue} radioGroup={'button-group-name'}>
      {genders.map((gender: string) => (
        <RadioField
          key={gender}
          label={gender}
          value={selectedValue}
          checkValue={gender}
          onChange={(event) => {
            setSelectValue(event?.target?.value);
          }}
        />
      ))}
      </RadioGroupField>
    </FlexBox>
  );
};

export default Demo;

`,
  },
];
