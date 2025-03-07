import { FormSwitchField, SwitchField, useDFLForm } from '@dfl/mui-react-common';
import { Box } from '@mui/material';
import { IDelivery } from 'modules/sales/settings/common/interfaces';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from '@dfl/mui-admin-layout';
import { COST_TYPE, shippingExpressColumns } from '../../constants';
import { ExpressDeliveryGlobalForm } from 'modules/sales/settings/home-delivery/components/ExpressDeliveryGlobalForm';

type Props = {
  global: IDelivery;
  data?: IDelivery;
};

const ExpressLocationForm = ({ global, data }: Props) => {
  const { t } = useTranslation('homeDelivery');
  const { watch, setValue } = useDFLForm();
  const selectedCost = watch?.('customPrice');
  const hasExpress = watch?.('hasExpress');

  useEffect(() => {
    if (selectedCost === COST_TYPE.BASE) {
      setValue?.('expressPrice', global?.expressPrice)
      setValue?.('expressTime', global?.expressTime)
    }
  }, [global?.expressPrice, setValue, global?.expressTime]);

  if (selectedCost === COST_TYPE.BASE && (!global?.hasExpress)) return <SwitchField label={t('expressDelivery:expressDisabled')} checked={global?.hasExpress} />;

  return (
    <>
      {selectedCost === COST_TYPE.BASE && (global?.hasExpress) &&
        <>
          <SwitchField label={t(global?.hasExpress ? 'expressDelivery:expressEnabled' : 'expressDelivery:expressDisabled')} checked={global?.hasExpress} />
          <Box sx={{ '.MuiTable-root': { minWidth: '553px' }, mt: 1, display: 'flex', gap: 3, flexDirection: 'column' }}>
            <Table
              columns={shippingExpressColumns}
              data={[data || global]}
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
            checked={global?.hasExpress}
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
