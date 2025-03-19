import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import BankListContainer from 'modules/sales/settings/bank/containers/BankListContainer';
import { bankFilters } from 'modules/sales/settings/bank/constants/bank.filters';

const BankList = () => {
  const { t } = useTranslation('bank');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'banks'} filters={bankFilters}>
        <BankListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(BankList);
