import { FlexBox, FormLabel, FormRadioGroupField } from '@dfl/mui-react-common';
import { FormControlLabel, Radio } from '@mui/material';
import { map } from 'lodash';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface SelectProductRadioComponentProps {
  name: string;
  label?: string;
  required?: boolean;
  options: any[];
  disabled?: boolean;
  readOnly?: boolean;
  flexDirection?: string;
}

const SelectProductRadioComponent = ({
  name,
  disabled,
  readOnly,
  options,
  ...props
}: SelectProductRadioComponentProps) => {
  const { t } = useTranslation('product');

  return (
    <FormLabel {...props}>
      <FormRadioGroupField name={name} disabled={disabled} readOnly={readOnly}>
        <FlexBox>
          {map(options, (option, index) => {
            return (
              <FormControlLabel
                key={index}
                value={option.value}
                control={<Radio />}
                label={t(option.label)}
                disabled={disabled}
              />
            );
          })}
        </FlexBox>
      </FormRadioGroupField>
    </FormLabel>
  );
};

export default memo(SelectProductRadioComponent);
