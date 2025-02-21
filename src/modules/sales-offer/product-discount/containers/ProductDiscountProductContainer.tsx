import { productFilters, productTabs } from 'modules/inventory/product/constants';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ProductDiscountProductListContainer from './ProductDiscountProductListContainer';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { useProductDiscountDetails } from '../contexts/ProductDiscountDetails';
import { FormPaper } from 'modules/common/components/FormPaper';
import { ChildrenProps, PageLoader } from '@dfl/mui-react-common';
import ProductDiscountReportContainer from 'modules/reports/containers/product-discount/ProductDiscountReportContainer';
import { OFFER_STATUS } from 'modules/sales-offer/common/constants/offer.enum';

const ProductDiscountProductContainer = () => {
  const { t } = useTranslation('product');
  const { discount, isLoading } = useProductDiscountDetails();

  if (isLoading) {
    return (
      <FormPaper>
        <PageLoader />
      </FormPaper>
    );
  }

  if (discount?.status === OFFER_STATUS.FINISHED) {
    return (
      <FormPaperLayout>
        <ProductDiscountReportContainer />
      </FormPaperLayout>
    );
  }

  return (
    <FormPaper title={t('list')}>
      <TableProvider id='product-discount-details' filters={productFilters}>
        <FilterViewProvider views={productTabs} defaultView={'all'}>
          <ProductDiscountProductListContainer />
        </FilterViewProvider>
      </TableProvider>
    </FormPaper>
  );
};

export default memo(ProductDiscountProductContainer);

const FormPaperLayout = ({ children }: ChildrenProps) => {
  const { t } = useTranslation();
  return (
    <FormPaper
      title={t('report:statistic')}
      variant={{
        title: 'h1',
      }}
    >
      {children}
    </FormPaper>
  );
};
