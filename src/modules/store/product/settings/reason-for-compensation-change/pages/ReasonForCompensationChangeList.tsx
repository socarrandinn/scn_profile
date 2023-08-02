import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import ReasonForCompensationChangeListContainer from 'modules/store/product/settings/reason-for-compensation-change/containers/ReasonForCompensationChangeListContainer';
import { reasonForCompensationChangeFilters } from 'modules/store/product/settings/reason-for-compensation-change/constants/reason-for-compensation-change.filters';

const ReasonForCompensationChangeList = () => {
  const { t } = useTranslation('reasonForCompensationChange');

  return (
    <PagePaperLayout title={t('reasonForCompensationChangeList')}>
      <TableProvider id={'reasonForCompensationChanges'} filters={reasonForCompensationChangeFilters}>
        <ReasonForCompensationChangeListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ReasonForCompensationChangeList);
