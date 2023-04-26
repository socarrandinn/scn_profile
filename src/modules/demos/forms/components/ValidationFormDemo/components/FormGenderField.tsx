import React, { memo } from 'react';
import { FormFieldControlProps, FormSelectField } from '@dfl/mui-react-common';
import MenuItem from '@mui/material/MenuItem';
import { GENDER_ENUM } from '../utils';

const FormGenderField = (props: FormFieldControlProps) => {
  return (
    <FormSelectField {...props}>
      {Object.values(GENDER_ENUM).map((gender: string) => {
        return (
          <MenuItem key={gender} value={gender}>
            {gender}
          </MenuItem>
        );
      })}
    </FormSelectField>
  );
};

export default memo(FormGenderField);
