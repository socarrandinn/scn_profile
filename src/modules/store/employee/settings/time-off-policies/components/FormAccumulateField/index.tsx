import {
  FlexBox,
  FormCheckBoxField,
  FormFieldControl,
  FormLabel,
  FormSelectField,
  FormTextField, useDFLForm,
} from '@dfl/mui-react-common';
import { Stack, MenuItem, Typography, Grid } from '@mui/material';
import { IntervalEnumValues, IntervalEnum } from 'modules/store/employee/settings/time-off-policies/constants/interval.enum';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

type AccumulateFieldProps = {
  name: string,
  label?: string,
  required?: boolean
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

const AccumulateField = ({ name, value, label, required }: AccumulateFieldProps) => {
  const { t } = useTranslation('timeOffPolicy');
  const { watch } = useDFLForm();
  const isAccumulative = watch?.(`${name}.isAccumulative`);

  return (
        <Stack direction='column'>
            <FormLabel required={required}>
                <Typography variant='subtitle2' sx={{ fontSize: '13px' }}>
                    {label}
                </Typography>
            </FormLabel>

            <Grid container spacing={0}>
                <Grid item xs={12} sm={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <FormCheckBoxField
                        name={`${name}.isAccumulative`}
                        label={t('fields.accumulate.isAccumulative')}
                    />
                </Grid>

                {isAccumulative && (
                    <Grid item xs={12} sm={8}>
                        <FormLabel>{t('fields.accumulate.count')}</FormLabel>
                        <FlexBox>
                            <FormTextFieldStyled
                                name={`${name}.value`}
                            />
                            <FormSelectFieldStyled
                                name={`${name}.interval`}
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
  return <FormFieldControl {...props} Component={AccumulateField}/>;
};
