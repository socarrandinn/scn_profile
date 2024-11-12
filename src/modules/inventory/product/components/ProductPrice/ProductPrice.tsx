import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import ProductDetailPriceUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailPriceUpdateContainer';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { BasicTableDoubleColumnHeadless, BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { simpleColumns } from 'modules/common/constants/simple.columns';
import { IProduct } from '../../interfaces/IProduct';
import { formatNum } from 'utils/math';
import { calculateFinalPrice } from '../../utils';
import { NumberValue } from '@dfl/mui-react-common';
import OtherCostViewMode from './OtherCostCell';
import LogisticViewMode from './LogisticViewMode';
import { Box, Stack } from '@mui/material';

const ProductPrice = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper
        nm
        title={t('section.prices.information')}
        actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}
      >
        <ProductDetailPriceUpdateContainer
          initValue={{
            _id: product?._id,
            priceDetails: product?.priceDetails,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper
      nm
      title={t('section.prices.information')}
      actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}
    >
      <BasicTableDoubleColumnHeadless
        columns={simpleColumns}
        doubleColumnData={getDoubleArray(product as IProduct) || []}
        responsiveData={getArray(product as IProduct) || []}
        isLoading={isLoading}
        error={error}
        minWidth={'100%'}
        responsiveComponent={
          <Stack gap={2}>
            <BasicTableHeadless
              columns={simpleColumns}
              data={getArray(product as IProduct) || []}
              isLoading={isLoading}
              error={error}
              minWidth={'100%'}
            />
            <Box sx={{ p: '8px 16px' }}>
              <OtherCostViewMode otherCosts={product?.priceDetails?.distribution?.otherCost || []} />
            </Box>
          </Stack>
        }
      />
    </FormPaper>
  );
};

export default memo(ProductPrice);

const getArray = (data: IProduct): any[] => {
  const { priceDetails: price } = data || {};

  return [
    {
      label: 'product:section.prices.cost',
      value: price?.distribution?.cost?.value ? `${formatNum(price?.distribution?.cost?.value)}` : 0,
    },
    {
      label: 'product:section.prices.shipping',
      value: price?.distribution?.shipping?.value ? `${formatNum(price?.distribution?.shipping?.value)}` : 0,
    },
    {
      label: 'product:section.prices.commercial',
      value: price?.distribution?.commercial ? `${formatNum(price?.distribution?.commercial?.value)}` : 0,
    },
    {
      label: 'product:section.prices.price',
      value:
        price?.distribution && price?.distribution?.cost?.value
          ? calculateFinalPrice(price?.distribution, price?.distribution?.cost?.value)
          : 0,
    },
    {
      label: 'product:section.prices.logistic',
      value: <LogisticViewMode data={price?.distribution} />,
    },
    /*  {
      label: 'product:section.prices.otherCost',
      value: <OtherCostViewMode otherCosts={price?.distribution?.otherCost || []} />,
    }, */
  ];
};
const getDoubleArray = (data: IProduct): any[] => {
  const { priceDetails: price } = data || {};

  return [
    {
      label: 'product:section.prices.cost',
      value: <NumberValue value={formatNum(price?.distribution?.cost?.value || 0)} />,
      label2: 'product:section.prices.shipping',
      value2: <NumberValue value={formatNum(price?.distribution?.shipping?.value || 0)} />,
    },
    {
      label: 'product:section.prices.commercial',
      value: <NumberValue value={formatNum(price?.distribution?.commercial?.value || 0)} />,
      label2: 'product:section.prices.price',
      value2: price?.distribution && price?.distribution?.cost?.value && (
        <NumberValue value={calculateFinalPrice(price?.distribution, price?.distribution?.cost?.value) || 0} />
      ),
    },
    {
      label: 'product:section.prices.logistic',
      value: <LogisticViewMode data={price?.distribution} />,
      label2: 'product:section.prices.otherCost',
      value2: <OtherCostViewMode otherCosts={price?.distribution?.otherCost || []} />,
    },
  ];
};
