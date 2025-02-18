import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageLayout, PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import ExpressDeliveryListContainer from 'modules/sales/settings/express-delivery/containers/ExpressDeliveryListContainer';
import { expressDeliveryFilters } from 'modules/sales/settings/express-delivery/constants/express-delivery.filters';
import { HelperText } from 'modules/inventory/settings/warehouse-area/components/HelperText';
import { Divider, Stack, Typography } from '@mui/material';
import { DeliveryActiveCheckbox } from 'modules/sales/settings/common/components/DeliveryActiveCheckbox';
import ExpressDeliveryCreateContainer from 'modules/sales/settings/express-delivery/containers/ExpressDeliveryCreateContainer';
import ExpressDeliveryStoresContainer from 'modules/sales/settings/express-delivery/containers/ExpressDeliveryStoresContainer';

const ExpressDeliveryList = () => {
  const { t } = useTranslation('expressDelivery');

  return (
    <PageLayout>
      <HelperText text={t('description')} />

      <PagePaperLayout title={t('list')} mb={3}>
        <Stack gap={3}>
          <DeliveryActiveCheckbox onCheckboxChange={() => { }} />
          <Typography variant='subtitle2'>{t('activeDescription')}</Typography>

          <ExpressDeliveryCreateContainer />

          <TableProvider id={'expressDeliveries'} filters={expressDeliveryFilters}>
            <ExpressDeliveryListContainer />
          </TableProvider>

          <Divider />

          <ExpressDeliveryStoresContainer />
        </Stack>
      </PagePaperLayout>
    </PageLayout>
  );
};

export default memo(ExpressDeliveryList);
