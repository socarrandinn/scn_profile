import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useToggle } from '@dfl/hook-utils';
import { Typography } from '@mui/material';
// import { HandlerError } from '@dfl/mui-react-common';
// import { mapGetOneErrors } from 'constants/errors';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import ProductDetailMediaUpdateContainer from '../../containers/ProductTabs/ProductDetailMediaUpdateContainer';

const ProductGeneralMediaInformation = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper
        title={t('section.summary.score.title')}
        actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}
      >
        <ProductDetailMediaUpdateContainer
          initValue={{
            _id: product?._id,
            media: product?.media,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('section.summary.score.title')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
      <Typography> imagenes </Typography>
    </FormPaper>
  );
};

export default memo(ProductGeneralMediaInformation);
