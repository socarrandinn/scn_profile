import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from '../contexts/ProductDetail';
import { FormPaper } from 'modules/common/components/FormPaper';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { PRODUCT_PERMISSIONS } from '../constants';
import SeoPreview from 'components/SeoPreview/SeoPreview';
import { urlBase } from './ProductFormSections/SeoForm';
import ProductDetailSeoUpdate from './ProductTabs/ProductDetailSeoUpdate';

const ProductSeo = () => {
  const { t } = useTranslation('product');
  const { isLoading, error, product, onOneClose, onOneToggle, state } = useProductDetail();
  const open = useMemo(() => state?.form_10 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_10'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_10'), [onOneClose]);

  if (open) {
    return (
      <FormPaper
        nm
        title={t('section.seo.title')}
        actions={<FormPaperAction onToggle={handleToggle} open={open} />}
      >
        <ProductDetailSeoUpdate
          initValue={{
            _id: product?._id,
            seo: product?.seo,
            slug: product?.slug,
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
      nm
      title={t('section.seo.title')}
      actions={
        <FormPaperAction
          onToggle={handleToggle}
          open={open}
          permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE}
        />
      }
    >
      <SeoPreview
        title={product?.seo?.name}
        description={product?.seo?.description}
        urlSlug={`${urlBase}${product?.slug as string}`}
        image={product?.seo?.image}
      />
    </FormPaper>
  );
};

export default memo(ProductSeo);
