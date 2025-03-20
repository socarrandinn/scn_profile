import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import ProductDetailScoreUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailScoreUpdateContainer';
import { Box, Slider } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { productScoreMarks } from '../../constants/product-score-marks';
import { PRODUCT_PERMISSIONS } from '../../constants';

const ProductScoreInformation = () => {
  const { t } = useTranslation('product');
  const { isLoading, error, product, onOneClose, onOneToggle, state } = useProductDetail();
  const open = useMemo(() => state?.form_2 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_2'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_2'), [onOneClose]);

  if (open) {
    return (
      <FormPaper
        title={t('section.summary.score.title')}
        actions={<FormPaperAction onToggle={handleToggle} open={open} />}
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
      mbHeader={'0px'}
      title={t('section.summary.score.title')}
      actions={<FormPaperAction onToggle={handleToggle} open={open} permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE} />}
    >
      {isLoading && '...'}
      {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
      {!isLoading && !error && (
        <Box marginTop={5}>
          <Slider
            value={typeof product?.score === 'number' ? product?.score : 0}
            valueLabelDisplay='on'
            step={10}
            marks={productScoreMarks}
            max={1000}
          />
        </Box>
      )}
    </FormPaper>
  );
};

export default memo(ProductScoreInformation);
