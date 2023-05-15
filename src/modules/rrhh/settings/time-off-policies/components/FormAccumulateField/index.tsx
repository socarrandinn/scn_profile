import React, { ChangeEvent, useCallback } from 'react';
import {
  FlexBox,
  FormCheckBoxField,
  FormFieldControl,
  FormLabel,
  FormSelectField,
  FormTextField,
} from '@dfl/mui-react-common';
import { Stack, TextFieldProps, SelectChangeEvent, MenuItem, Box, Typography, Grid } from '@mui/material';
import { IntervalEnumValues, IntervalEnum } from 'modules/rrhh/settings/time-off-policies/constants/interval.enum';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line @typescript-eslint/ban-types
type AccumulateFieldProps = Omit<TextFieldProps, 'value'> & {
  value: {
    isAccumulative: boolean;
    value: number;
    interval: IntervalEnum;
  };
};

const FormTextFieldStyled = styled(FormTextField)(() => ({
  '.MuiInputBase-root': {
    borderRadius: '4px 0 0 4px',
    borderRight: '1px solid #ccc',
  },
}));

const FormSelectFieldStyled = styled(FormSelectField)(() => ({
  borderRadius: '0 4px 4px 0 !important',
  '.MuiInputBase-root': {
    borderRadius: '0 4px 4px 0 !important',
  },
}));

const AccumulateField = ({ name, value, onChange, label, required }: AccumulateFieldProps) => {
  const { t } = useTranslation('timeOffPolicy');

  const handleChange = useCallback(
    (field: string, val: string | boolean) => {
      // @ts-ignore
      onChange && onChange({ target: { value: { ...value, [field]: val } } });
    },
    [value],
  );

  return (
    <Stack direction='column'>
      <FormLabel required={required}>
        <Typography variant='subtitle2' sx={{ fontSize: '13px' }}>
          {label}
        </Typography>
      </FormLabel>

      <Grid container spacing={0}>
        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <FormCheckBoxField
            /* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */
            name={`${name}.isAccumulative`}
            label={t('fields.accumulate.isAccumulative')}
            checked={value?.isAccumulative}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              handleChange('isAccumulative', e?.target?.checked);
            }}
          />
        </Grid>

        {value?.isAccumulative && (
          <Grid item xs={8}>
            <FormLabel>{t('fields.accumulate.count')}</FormLabel>
            <FlexBox>
              <FormTextFieldStyled
                /* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */
                name={`${name}.value`}
                value={value?.value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  handleChange('value', e?.target?.value);
                }}
              />
              <FormSelectFieldStyled
                /* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */
                name={`${name}.interval`}
                value={value?.interval}
                // @ts-ignore
                onChange={(e: SelectChangeEvent<string>) => {
                  handleChange('interval', e?.target?.value);
                  return e?.target?.value;
                }}
              >
                {IntervalEnumValues?.map((item: string, idx: number) => {
                  return (
                    <MenuItem key={idx} value={item}>
                      {t(`intervals.${item}`)}
                    </MenuItem>
                  );
                })}
              </FormSelectFieldStyled>
            </FlexBox>
          </Grid>
        )}
      </Grid>
    </Stack>
  );
};

export const FormAccumulateField = (props: { readonly?: string; isAccumulative?: boolean } & any) => {
  return <FormFieldControl {...props} Component={AccumulateField} />;
};
