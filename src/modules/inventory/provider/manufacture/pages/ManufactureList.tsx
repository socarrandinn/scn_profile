import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import ManufactureListContainer from 'modules/inventory/provider/manufacture/containers/ManufactureListContainer';
import { manufactureFilters } from 'modules/inventory/provider/manufacture/constants/manufacture.filters';

const ManufactureList = () => {
  const { t } = useTranslation('manufacture');

  return (
    <PagePaperLayout title={t('list')} mb={3}>
      <TableProvider id={'manufactures'} filters={manufactureFilters}>
        <ManufactureListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ManufactureList);
