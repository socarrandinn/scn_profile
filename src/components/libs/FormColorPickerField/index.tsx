import React, { useCallback } from 'react';
import { FlexBox, FormFieldControl } from '@dfl/mui-react-common';
import { CirclePicker, ColorResult, Color, CirclePickerProps } from 'react-color';
import { TextFieldProps, styled, Stack, Typography } from '@mui/material';
import CustomColorPicker from 'components/libs/FormColorPickerField/CustomColorPicker';

type FormColorPickerFieldProps = Omit<TextFieldProps, 'value'> & {
  colors?: string[];
  value?: Color;
};

const CirclePickerStyled = styled(CirclePicker)<CirclePickerProps>(({ theme }) => ({
  gap: 12,
  margin: '0 !important',
  '&>span>div': {
    margin: '0 !important',
  },
}));

const defaultColors = [
  '#f44336',
  '#e91e63',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
];

const ColorPickerField = ({ colors = defaultColors, value, onChange, label, required }: FormColorPickerFieldProps) => {
  const handleChange = useCallback(
    (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
      // @ts-ignore
      onChange && onChange({ target: { value: color?.hex } });
    },
    [onChange],
  );

  return (
    <Stack direction='column'>
      <Typography variant='subtitle2'>
        {label}
        {required ? '*' : ''}
      </Typography>
      <FlexBox gap={1.5} justifyContent='flex-start' alignItems='center' width='100%'>
        <CirclePickerStyled colors={colors} width='85%' color={value} onChange={handleChange} />
        <CustomColorPicker value={value} onChange={onChange} />
      </FlexBox>
    </Stack>
  );
};

export const FormFontIconPicker = (props: { readonly?: string; colors?: string[] } & any) => {
  return <FormFieldControl {...props} Component={ColorPickerField} />;
};
