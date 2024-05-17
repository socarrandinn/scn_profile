import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import { robotTxtFilters } from 'modules/cms/seo/robot-txt/constants/robot-txt.filters';

const RobotTxt = () => {
  const { t } = useTranslation('robotTxt');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'robotTxts'} filters={robotTxtFilters}>
       ghghgh
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(RobotTxt);
