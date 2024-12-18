import { useMemo, memo, useCallback } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import ProductDetailOrganizationUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailOrganizationUpdateContainer';
import { renderNameLink } from 'modules/inventory/common/components/NameLink/NameLink';
import { isEmpty } from 'lodash';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';
import ProductGeneralOrganizationFormSkeleton from 'modules/inventory/product/components/ProductGeneralOrganizationForm/ProductGeneralOrganizationFormSkeleton';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import ProviderInfoRow from 'modules/common/components/ProviderInfoRow/ProviderInfoRow';
import { PRODUCT_PERMISSIONS } from '../../constants';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants';
import { MANUFACTURE_PERMISSIONS } from 'modules/inventory/provider/manufacture/constants';

const ProductGeneralOrganization = () => {
  const { t } = useTranslation('product');
  const { isLoading, error, product, onOneClose, onOneToggle, state } = useProductDetail();
  const open = useMemo(() => state?.form_1 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_1'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_1'), [onOneClose]);

  const productArray = useMemo(
    () => [
      {
        label: 'fields.supplier',
        value: renderNameLink({
          name: product?.providers?.supplier?.name || '',
          route: `/inventory/settings/suppliers/${product?.providers?.supplier?._id as string}/general`,
          noLink: isEmpty(product?.providers?.supplier?._id),
          sx: { color: 'rgba(62, 62, 62, 0.50)', '&:hover': { color: 'primary.main' } },
          permissions: SUPPLIER_PERMISSIONS.SUPPLIER_VIEW
        }),
      },
      {
        label: 'fields.manufacturer',
        value: renderNameLink({
          name: product?.providers?.manufacturer?.name || '',
          route: `/inventory/settings/manufactures/${product?.providers?.manufacturer?._id as string}/general`,
          noLink: isEmpty(product?.providers?.manufacturer?._id),
          sx: { color: 'rgba(62, 62, 62, 0.50)', '&:hover': { color: 'primary.main' } },
          permissions: MANUFACTURE_PERMISSIONS.MANUFACTURE_VIEW
        }),
      },
    ],
    [product],
  );

  if (open) {
    return (
      <FormPaper
        nm
        title={t('section.summary.providers.title')}
        actions={<FormPaperAction onToggle={handleToggle} open={open} />}
      >
        <ProductDetailOrganizationUpdateContainer
          initValue={{
            _id: product?._id,
            providers: {
              // @ts-ignore
              supplier: product?.providers?.supplier?._id,
              manufacturer: product?.providers?.manufacturer?._id,
            },
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
      mbHeader={'12.83px'}
      title={t('section.summary.providers.title')}
      actions={
        <FormPaperAction
          onToggle={handleToggle}
          open={open}
          permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE}
        />
      }
    >
      {isLoading && <ProductGeneralOrganizationFormSkeleton />}
      {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
      {!isLoading && !error && productArray.map((item, index) =>
        <ProviderInfoRow key={index} label={t(item.label)} value={item.value} />
      )}
    </FormPaper>
  );
};

export default memo(ProductGeneralOrganization);
