import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import ProductDetailOfferUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailOfferUpdateContainer';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';

const ProductGeneralOffer = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper title={t('section.offer.title')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
        <ProductDetailOfferUpdateContainer
          initValue={{
            _id: product?._id,
            offer: product?.offer,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('fields.generaldata')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(product as IProduct) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(ProductGeneralOffer);

const getArray = (data: IProduct): any[] => {
  const { type, offer, from, to } = data?.offer || {};
  const array = [
    { label: 'offer.offerType', value: type },
    { label: 'fields.offer', value: offer },
    { label: 'offer.availableFrom', value: from },
    { label: 'offer.availableUntil', value: to },
  ];
  return array;
};
