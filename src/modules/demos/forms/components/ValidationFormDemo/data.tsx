import { FormFieldControlProps, FormSelectField } from '@dfl/mui-react-common';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

export enum GENDER_ENUM {
  MALE = 'Male',
  FEMALE = 'Female',
}

export enum CIVIL_STATUS_ENUM {
  SINGLE = 'Single',
  MARRIED = 'Married',
  OTHER = 'Other',
}

export const FormGenderField = (props: FormFieldControlProps) => {
  return <FormSelectField {...props}>
    {
      Object.values(GENDER_ENUM).map((gender: string) => {
        return <MenuItem key={gender} value={gender}>{gender}</MenuItem>;
      })
    }
  </FormSelectField>;
};

export const FormCivilStatusField = (props: FormFieldControlProps) => {
  return <FormSelectField {...props}>
    {
      Object.values(CIVIL_STATUS_ENUM).map((civilStatus: string) => {
        return <MenuItem key={civilStatus} value={civilStatus}>{civilStatus}</MenuItem>;
      })
    }
  </FormSelectField>;
};
