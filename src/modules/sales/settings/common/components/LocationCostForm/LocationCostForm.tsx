import { FlexBox, FormRadioGroupField, useDFLForm } from '@dfl/mui-react-common';
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import { Box, FormControlLabel, FormHelperText, Grid, Radio, Typography } from '@mui/material';
import { IDelivery } from 'modules/sales/settings/common/interfaces';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from '@dfl/mui-admin-layout';
import { ShippingCostForm } from '../ShippingCostForm';
import { ShippingTimeForm } from '../ShippingTimeForm';
import { COST_TYPE, costTypeEnumValues, shippingColumns } from '../../constants';
import { useSearchParamsChange } from '@dfl/react-security';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';

type Props = {
  data: IDelivery;
  name: string;
};

const LocationCostForm = ({ data, name, ...props }: Props) => {
  const { t } = useTranslation('homeDelivery');
  const { watch, formState, setValue } = useDFLForm();
  const { value } = useSearchParamsChange('type');
  const selectedCost = watch?.('customPrice');

  useEffect(() => {
    if (selectedCost === COST_TYPE.BASE) {
      setValue?.('price', data?.price)
      setValue?.('time', data?.time)
      setValue?.('weightPrice', data?.weightPrice)
      setValue?.('volumePrice', data?.volumePrice)
    }
  }, [selectedCost, data?.price, setValue, data?.time, data?.volumePrice, data?.weightPrice]);

  return (
    <>
      <Typography variant='body1'>{t('costTypeSelect')}</Typography>
      <FormRadioGroupField name={name} id={name} {...props}>
        <FlexBox gap={6} alignItems={'center'} justifyContent={'flex-start'}>
          {costTypeEnumValues?.map((cost) => (
            <FormControlLabel
              key={cost}
              value={cost}
              control={
                <Radio
                  icon={<RadioButtonUnchecked />}
                  checkedIcon={<RadioButtonChecked color="primary" />}
                />
              }
              sx={{ '.MuiSvgIcon-root': { width: 28, height: 28 } }}
              label={t(value === LOCATION_TYPE.MUNICIPALITY && cost === COST_TYPE.BASE ? 'costType.BASE_CITY' : `costType.${cost}`)}
            />
          ))}
        </FlexBox>
        {formState?.errors?.[name]?.message && (
          <FormHelperText error>{t(`errors:${formState?.errors?.[name]?.message as string}`)}</FormHelperText>
        )}
      </FormRadioGroupField>
      {selectedCost === COST_TYPE.BASE ? (
        <Box sx={{ '.MuiTable-root': { minWidth: '553px' }, mt: 1, display: 'flex', gap: 3, flexDirection: 'column' }}>
          <Table
            columns={shippingColumns?.slice(1)}
            data={[data]}
            total={1}
            hidePagination
          />
        </Box>
      ) : (
        <Box sx={{ mt: 1 }}>
          <Grid container columnSpacing={{ xs: 1, md: 2 }} rowSpacing={{ xs: 2, md: 3 }}>
            <ShippingCostForm mdProps={{ price: 6, weightPrice: 6, volumePrice: 6 }} />
            <Grid item xs={12} md={6}>
              <ShippingTimeForm name='time' />
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default memo(LocationCostForm);
