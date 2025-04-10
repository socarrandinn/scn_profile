import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { HandlerError } from '@dfl/mui-react-common';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { mapGetOneErrors } from 'constants/errors';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import ProductDetailMediaUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailMediaUpdateContainer';
import { IImageMedia } from 'modules/common/interfaces';
import ProductGeneralMediaSkeleton from 'modules/inventory/product/components/ProductGeneralMediaForm/ProductGeneralMediaFormSkeleton';
import { PRODUCT_PERMISSIONS } from '../../constants';
import { ProductMedia } from '../ProductMedia';
import ProductNoImage from '../ProductMedia/ProductNoImage';

const ProductGeneralMediaInformation = () => {
  const { t } = useTranslation('product');
  const { isLoading, error, product, onOneClose, onOneToggle, state } = useProductDetail();
  const open = useMemo(() => state?.form_5 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_5'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_5'), [onOneClose]);

  if (open) {
    return (
      <FormPaper title={t('section.media.title')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <ProductDetailMediaUpdateContainer
          initValue={{
            _id: product?._id,
            media: product?.media,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper
      mbHeader={'13.04px'}
      title={t('section.media.title')}
      actions={<FormPaperAction onToggle={handleToggle} open={open} permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE} />}
    >
      {isLoading && <ProductGeneralMediaSkeleton />}
      {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
      {!isLoading && !error && product?.media?.length === 0 && (
        <ProductNoImage onClick={handleToggle} />
      )}
      {!isLoading && !error && (product?.media?.length as number) > 0 && (
        <ProductMedia pictures={product?.media as IImageMedia[]} />
      )}
    </FormPaper>
  );
};

export default memo(ProductGeneralMediaInformation);
