import { FlexBox, FormRadioGroupField, useDFLForm } from '@dfl/mui-react-common';
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import { Box, FormControlLabel, FormHelperText, Grid, Radio, Typography } from '@mui/material';
import { IHomeDelivery } from 'modules/sales/settings/home-delivery/interfaces';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { COST_TYPE, costTypeEnumValues } from '../../constants/cost-type.enum';
import { Table } from '@dfl/mui-admin-layout';
import { shippingCostColumns } from '../../constants/shipping-columns';
import { ShippingCostForm } from '../ShippingCostForm';
import { TIME_TYPE, timeTypeEnumValues } from '../../constants/time-type.enum';
import { ShippingTimeForm } from '../ShippingTimeForm';

type Props = {
  data: IHomeDelivery;
  name: string;
};

const LocationTimeForm = ({ data, name, ...props }: Props) => {
  const { t } = useTranslation('homeDelivery');
  const { watch, formState } = useDFLForm();
  const selectedTime = watch?.('timeType');

  return (
    <>
      <Typography variant='body1'>{t('timeTypeSelect')}</Typography>
      <FormRadioGroupField name={name} id={name} {...props}>
        <FlexBox gap={6} alignItems={'center'} justifyContent={'flex-start'}>
          {timeTypeEnumValues?.map((time) => (
            <FormControlLabel
              key={time}
              value={time}
              control={
                <Radio
                  icon={<RadioButtonUnchecked />}
                  checkedIcon={<RadioButtonChecked color="primary" />}
                />
              }
              sx={{ '.MuiSvgIcon-root': { width: 28, height: 28 } }}
              label={t(`timeType.${time}`)}
            />
          ))}
        </FlexBox>
        {formState?.errors?.[name]?.message && (
          <FormHelperText error>{t(`errors:${formState?.errors?.[name]?.message}`)}</FormHelperText>
        )}
      </FormRadioGroupField>
      <Box sx={{ mt: 2 }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <ShippingTimeForm disabled={selectedTime === TIME_TYPE.BASE} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default memo(LocationTimeForm);
