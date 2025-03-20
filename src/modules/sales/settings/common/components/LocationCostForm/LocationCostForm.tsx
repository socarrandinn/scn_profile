import { FlexBox, FormRadioGroupField, useDFLForm } from '@dfl/mui-react-common';
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import { Box, FormControlLabel, FormHelperText, Grid, Radio } from '@mui/material';
import { IDelivery } from 'modules/sales/settings/common/interfaces';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from '@dfl/mui-admin-layout';
import { ShippingCostForm } from '../ShippingCostForm';
import { ShippingTimeForm } from '../ShippingTimeForm';
import { COST_TYPE, costTypeEnumValues, shippingColumns } from '../../constants';

type Props = {
  data?: IDelivery;
  global: IDelivery;
  name: string;
};

const LocationCostForm = ({ global, data, name }: Props) => {
  const { t } = useTranslation('homeDelivery');
  const { watch, formState, setValue } = useDFLForm();
  const selectedCost = watch?.('customPrice');

  useEffect(() => {
    if (selectedCost === COST_TYPE.BASE) {
      setValue?.('price', global?.price);
      setValue?.('time', global?.time);
      setValue?.('weightPrice', global?.weightPrice);
      setValue?.('volumePrice', global?.volumePrice);
    }
  }, [selectedCost, global?.price, setValue, global?.time, global?.volumePrice, global?.weightPrice]);

  return (
    <>
      <FormRadioGroupField name={name} id={name}>
        <FlexBox gap={6} alignItems={'center'} justifyContent={'flex-start'}>
          {costTypeEnumValues?.map((cost) => (
            <FormControlLabel
              key={cost}
              value={cost}
              control={<Radio icon={<RadioButtonUnchecked />} checkedIcon={<RadioButtonChecked color='primary' />} />}
              sx={{ '.MuiSvgIcon-root': { width: 28, height: 28 } }}
              label={t(`costType.${cost}`)}
            />
          ))}
        </FlexBox>
        {formState?.errors?.[name]?.message && (
          <FormHelperText error>{t(`errors:${formState?.errors?.[name]?.message as string}`)}</FormHelperText>
        )}
      </FormRadioGroupField>
      {selectedCost === COST_TYPE.BASE && (data || global) ? (
        <Box sx={{ '.MuiTable-root': { minWidth: '553px' }, mt: 1, display: 'flex', gap: 3, flexDirection: 'column' }}>
          <Table columns={shippingColumns?.slice(1)} data={[data || global]} total={1} hidePagination />
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
