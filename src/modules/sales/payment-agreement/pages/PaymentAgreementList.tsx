import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import PaymentAgreementListContainer from 'modules/sales/payment-agreement/containers/PaymentAgreementListContainer';
import { paymentAgreementFilters } from 'modules/sales/payment-agreement/constants/payment-agreement.filters';

const PaymentAgreementList = () => {
  const { t } = useTranslation('paymentAgreement');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'paymentAgreements'} filters={paymentAgreementFilters}>
        <PaymentAgreementListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(PaymentAgreementList);
