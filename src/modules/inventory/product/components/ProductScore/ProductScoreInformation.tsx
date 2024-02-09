import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useToggle } from '@dfl/hook-utils';
import ProductDetailScoreUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailScoreUpdateContainer';
import { OrganizationFormPaperActions } from 'modules/inventory/product/components/ProductGeneralOrganization/';
import { Typography } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';

const ProductScoreInformation = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper
        title={t('section.summary.score.title')}
        actions={<OrganizationFormPaperActions onToggle={onToggle} open={isOpen} />}
      >
        <ProductDetailScoreUpdateContainer
          initValue={{
            _id: product?._id,
            score: product?.score,
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
      title={t('section.summary.score.title')}
      actions={<OrganizationFormPaperActions onToggle={onToggle} open={isOpen} />}
    >
      {isLoading && '...'}
      {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
      {!isLoading && !error && <Typography>{product?.score || '0'}</Typography>}
    </FormPaper>
  );
};

export default memo(ProductScoreInformation);
