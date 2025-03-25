import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import PaymentAgreementListContainer from 'modules/sales/payment-agreement/containers/PaymentAgreementListContainer';
import { paymentAgreementFilters } from 'modules/sales/payment-agreement/constants/payment-agreement.filters';
import { PAYMENT_AGREEMENT_VIEWS } from '../constants/payment-agreement-tabs-view.constants';

const PaymentAgreementList = () => {
  const { t } = useTranslation('paymentAgreement');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'paymentAgreements'} filters={paymentAgreementFilters}>
        <FilterViewProvider views={PAYMENT_AGREEMENT_VIEWS} defaultView={'all'}>
          <PaymentAgreementListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(PaymentAgreementList);
