import { FormSwitchField, SwitchField, useDFLForm } from '@dfl/mui-react-common';
import { Box } from '@mui/material';
import { IDelivery } from 'modules/sales/settings/common/interfaces';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from '@dfl/mui-admin-layout';
import { COST_TYPE, shippingExpressColumns } from '../../constants';
import { useSearchParamsChange } from '@dfl/react-security';
import { ExpressDeliveryGlobalForm } from 'modules/sales/settings/home-delivery/components/ExpressDeliveryGlobalForm';

type Props = {
  data: IDelivery;
};

const ExpressLocationForm = ({ data, ...props }: Props) => {
  const { t } = useTranslation('homeDelivery');
  const { watch, formState, setValue } = useDFLForm();
  const { value } = useSearchParamsChange('type');
  const selectedCost = watch?.('customPrice');
  const hasExpress = watch?.('hasExpress');

  useEffect(() => {
    if (hasExpress) {
      setValue?.('expressPrice', data?.expressPrice)
      setValue?.('expressTime', data?.expressTime)
    }
  }, [data?.expressPrice, setValue, data?.expressTime]);

  if (selectedCost === COST_TYPE.BASE && (!data?.hasExpress)) return <SwitchField label={t('expressDelivery:expressDisabled')} checked={data?.hasExpress} />;

  return (
    <>
      {selectedCost === COST_TYPE.BASE && (data?.hasExpress) &&
        <>
          <SwitchField label={t(data?.hasExpress ? 'expressDelivery:expressEnabled' : 'expressDelivery:expressDisabled')} checked={data?.hasExpress} />
          <Box sx={{ '.MuiTable-root': { minWidth: '553px' }, mt: 1, display: 'flex', gap: 3, flexDirection: 'column' }}>
            <Table
              columns={shippingExpressColumns}
              data={[data]}
              total={1}
              hidePagination
            />
          </Box>
        </>
      }
      {selectedCost === COST_TYPE.CUSTOM && (
        <>
          <FormSwitchField
            label={t(hasExpress ? 'expressDelivery:expressEnabled' : 'expressDelivery:expressDisabled')}
            name='hasExpress'
            checked={data?.hasExpress}
            sx={{ mb: 1 }}
          />
          {hasExpress && (
            <ExpressDeliveryGlobalForm mdProps={{ price: 6, time: 6 }} />
          )}
        </>
      )}
    </>
  );
};

export default memo(ExpressLocationForm);
