import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useToggle } from '@dfl/hook-utils';
import ProductDetailScoreUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailScoreUpdateContainer';
import { Box, FormHelperText, Slider } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';
import { productScoreMarks } from 'modules/inventory/product/constants/product-score-marks';
import ProvidersFormPaperActions from '../ProductGeneralProviders/ProvidersFormPaperActions';

const ProductScoreInformation = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper
        actions={
          <ProvidersFormPaperActions label={t('section.summary.score.title')} onToggle={onToggle} open={isOpen} />
        }
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
      actions={
        <ProvidersFormPaperActions label={t('section.summary.score.title')} onToggle={onToggle} open={isOpen} />
      }
    >
      {isLoading && '...'}
      {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
      {!isLoading && !error && (
        <Box marginTop={6}>
          <Slider
            value={product?.score}
            valueLabelDisplay='on'
            step={10}
            marks={productScoreMarks}
            max={1000}
          />
          <FormHelperText>{t('section.summary.score.textHelper')}</FormHelperText>
        </Box>
      )}
    </FormPaper>
  );
};

export default memo(ProductScoreInformation);
