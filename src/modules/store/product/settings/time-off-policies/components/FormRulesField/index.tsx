import React, { ChangeEvent, useCallback } from 'react';
import { FormFieldControl, FormLabel, FormSelectField, FormTextField } from '@dfl/mui-react-common';
import { Stack, TextFieldProps, SelectChangeEvent, MenuItem, Box, Typography, Grid } from '@mui/material';
import {
  CommonIntervalsEnum,
  CommonIntervalsEnumValues,
  IntervalEnum,
} from 'modules/store/product/settings/time-off-policies/constants/interval.enum';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line @typescript-eslint/ban-types
type RulesFieldProps = Omit<TextFieldProps, 'value'> & {
  value: {
    limitTimeRule: {
      value: number;
      valueInterval: CommonIntervalsEnum;
      interval: IntervalEnum;
    };
    startApplyRuler: {
      value: number;
      valueInterval: CommonIntervalsEnum;
    };
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

const RulesWrapper = styled(Stack)(() => ({
  borderRadius: '4px',
  border: '1px dashed #e5eaf2',
}));

const RulesField = ({ name, value, onChange, label, required }: RulesFieldProps) => {
  const { t } = useTranslation('timeOffPolicy');

  const handleChangeLimitTimeRule = useCallback(
    (field: string, val: string | boolean) => {
      onChange &&
        // @ts-ignore
        onChange({ target: { value: { ...value, limitTimeRule: { ...value?.limitTimeRule, [field]: val } } } });
    },
    [value],
  );

  const handleChangeStartApplyRuler = useCallback(
    (field: string, val: string | boolean) => {
      onChange &&
        // @ts-ignore
        onChange({ target: { value: { ...value, startApplyRuler: { ...value?.startApplyRuler, [field]: val } } } });
    },
    [value],
  );

  return (
    <RulesWrapper direction='column' p={1}>
      <FormLabel required={required}>
        <Typography variant='subtitle2' sx={{ fontSize: '13px' }}>
          {label}
        </Typography>
      </FormLabel>

      <Box>
        <FormLabel>{t('fields.rules.limitTimeRule.count')}</FormLabel>
      </Box>

      <Grid container spacing={0}>
        <Grid item xs={6}>
          <FormTextFieldStyled
            /* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */
            name={`${name}.limitTimeRule.value`}
            value={value?.limitTimeRule?.value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              handleChangeLimitTimeRule('value', e?.target?.value);
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <FormSelectFieldStyled
            /* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */
            name={`${name}.limitTimeRule.valueInterval`}
            value={value?.limitTimeRule?.valueInterval}
            // @ts-ignore
            onChange={(e: SelectChangeEvent<string>) => {
              handleChangeLimitTimeRule('valueInterval', e?.target?.value);
              return e?.target?.value;
            }}
          >
            {CommonIntervalsEnumValues?.map((item: string, idx: number) => {
              return (
                <MenuItem key={idx} value={item}>
                  {t(`commonIntervals.${item}`)}
                </MenuItem>
              );
            })}
          </FormSelectFieldStyled>
        </Grid>
          <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: 1 }}>
              {t('byYear')}
          </Grid>
      </Grid>

      {/* =================== */}

      <Box mt={2}>
        <FormLabel>{t('fields.rules.startApplyRuler.count')}:</FormLabel>
      </Box>

      <Grid container spacing={0}>
        <Grid item xs={6}>
          <FormTextFieldStyled
            /* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */
            name={`${name}.startApplyRuler.value`}
            value={value?.startApplyRuler?.value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              handleChangeStartApplyRuler('value', e?.target?.value);
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <FormSelectFieldStyled
            /* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */
            name={`${name}.startApplyRuler.valueInterval`}
            value={value?.startApplyRuler?.valueInterval}
            // @ts-ignore
            onChange={(e: SelectChangeEvent<string>) => {
              handleChangeStartApplyRuler('valueInterval', e?.target?.value);
              return e?.target?.value;
            }}
          >
            {CommonIntervalsEnumValues?.map((item: string, idx: number) => {
              return (
                <MenuItem key={idx} value={item}>
                  {t(`commonIntervals.${item}`)}
                </MenuItem>
              );
            })}
          </FormSelectFieldStyled>
        </Grid>
        <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: 1 }}>
          {t('hired')}
        </Grid>
      </Grid>
    </RulesWrapper>
  );
};

export const FormRulesField = (props: { readonly?: string; colors?: string[] } & any) => {
  return <FormFieldControl {...props} Component={RulesField} />;
};
