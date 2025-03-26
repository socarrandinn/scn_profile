/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import React, { memo, useState } from 'react';
import IncidenceActionsHeader from 'modules/sales/incidence/components/IncidenceActionsHeader/IncidenceActionsHeader';
import { Grid, Typography } from '@mui/material';
import CustomerChargesField from 'modules/sales/incidence/components/CustomerChargesField/CustomerChargesField';
import { PaperContent } from 'modules/inventory/common/components/StoreBoxs/common';
import BillsField from 'modules/sales/incidence/components/BillsField/BillsField';
import IncidenceActionSummary from 'modules/sales/incidence/components/IncidenceActionSummary/IncidenceActionSummary';
import { IncidenceActionType } from 'modules/sales/incidence/constants/incidence-action.enum';
import { useTranslation } from 'react-i18next';
import { Table } from '@dfl/mui-admin-layout';
import { incidenceReimbursementsColumns } from 'modules/sales/incidence/constants/incidence-reimbursements.columns';
import IncidenceActionToolbar from 'modules/sales/incidence/components/IncidenceActionToolbar/IncidenceActionToolbar';
import ComparativeProductTables
  from 'modules/sales/incidence/components/ComparativeProductTables/ComparativeProductTables';
import { useToggle } from '@dfl/hook-utils';
import ReplacementConfirmation
  from 'modules/sales/incidence/components/ReplacementConfirmation/RaplacementConfirmation';

const muckUpData = [
  {
    _id: '1',
    product: 'Product 1',
    price: '$40.00',
    quantity: 4,
    value: 100,
    reimbursement: 2,
    inventory: 3,
  },
  {
    _id: '2',
    product: 'Product 1',
    price: '$44.00',
    quantity: 4,
    value: 100,
    reimbursement: 3,
    inventory: 10,
  },
  {
    _id: '3',
    product: 'Product 1',
    price: '$3.60',
    quantity: 4,
    value: 100,
    reimbursement: 5,
    inventory: 1,
  },
];

const ProductChangeIncidentContainer = () => {
  const { t } = useTranslation('incidence');

  const { isOpen, onClose, onOpen } = useToggle();
  const [products, setProducts] = useState<any[]>();

  return (
    <div>
      <IncidenceActionsHeader title={'Cambio de producto'} incidenceId='test' action={onOpen} />

      <ReplacementConfirmation isOpen={isOpen} onClose={onClose} products={products} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <PaperContent sx={{ mt: 2, borderRadius: 2 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <CustomerChargesField />
              </Grid>
              <Grid item xs={12} md={6}>
                <BillsField />
              </Grid>
            </Grid>
          </PaperContent>

          <PaperContent sx={{ mt: 2, borderRadius: 2 }}>
            <Typography mb={2}>{t('chooseProductToChange')}</Typography>

            <Table
              columns={incidenceReimbursementsColumns}
              data={muckUpData}
              total={3}
              isLoading={false}
              error={null}
              select
            />
          </PaperContent>

          <PaperContent sx={{ mt: 2, borderRadius: 2 }}>
            <Typography fontSize={16} fontWeight={600}>
              {t('actions.chooseNewProduct')}
            </Typography>
            <Typography mb={2}>{t('actions.chooseNewProduct')}</Typography>

            <IncidenceActionToolbar setProducts={setProducts} />

            <ComparativeProductTables products={products} />
          </PaperContent>
        </Grid>
        <Grid item xs={12} md={3}>
          <IncidenceActionSummary type={IncidenceActionType.REIMBURSEMENTS} />
        </Grid>
      </Grid>
    </div>
  );
};

export default memo(ProductChangeIncidentContainer);
