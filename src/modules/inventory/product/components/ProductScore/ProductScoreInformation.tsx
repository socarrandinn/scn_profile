import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import ProductDetailScoreUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailScoreUpdateContainer';
import { Box, FormHelperText, Slider } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';
import { productScoreMarks } from 'modules/inventory/product/constants/product-score-marks';
import ProvidersFormPaperActions from '../ProductGeneralProviders/ProvidersFormPaperActions';

const ProductScoreInformation = () => {
  const { t } = useTranslation('product');
  const { isLoading, error, product, onOneClose, onOneToggle, state } = useProductDetail();
  const open = useMemo(() => state?.form_2 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_2'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_2'), [onOneClose]);

  if (open) {
    return (
      <FormPaper
        actions={
          <ProvidersFormPaperActions label={t('section.summary.score.title')} onToggle={handleToggle} open={open} />
        }
      >
        <ProductDetailScoreUpdateContainer
          initValue={{
            _id: product?._id,
            score: product?.score,
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
      actions={
        <ProvidersFormPaperActions label={t('section.summary.score.title')} onToggle={handleToggle} open={open} />
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
