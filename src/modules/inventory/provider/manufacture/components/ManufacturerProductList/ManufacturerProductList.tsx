import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { manufactureProductFilters, productTabs } from 'modules/inventory/product/constants';
import ManufactureProductListContainer from '../../containers/ManufactureProductListContainer';

const ManufacturerProductList = () => {
  const { t } = useTranslation('product');

  return (
    <PagePaperLayout sx={{ mb: 3 }} title={t('list')}>
      <TableProvider id={'manufacturer-product'} filters={manufactureProductFilters}>
        <FilterViewProvider views={productTabs}>
          <ManufactureProductListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ManufacturerProductList);
