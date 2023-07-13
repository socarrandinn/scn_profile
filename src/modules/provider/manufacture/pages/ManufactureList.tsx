import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import ManufactureListContainer from 'modules/provider/manufacture/containers/ManufactureListContainer';
import { manufactureFilters } from 'modules/provider/manufacture/constants/manufacture.filters';
import { manufactureViewTabs } from 'modules/provider/manufacture/constants/manufactureViewTabs';

const ManufactureList = () => {
  const { t } = useTranslation('manufacture');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'manufactures'} filters={manufactureFilters}>
        <FilterViewProvider views={manufactureViewTabs}>
          <ManufactureListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ManufactureList);
