import React, { memo } from 'react';
import { SelectProps, MenuItem } from '@mui/material';
import { FormFieldControlProps, FormSelectField } from '@dfl/mui-react-common';
import { GENDER_ENUM } from '../utils';

const FormGenderField = (props: FormFieldControlProps & SelectProps) => {
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
