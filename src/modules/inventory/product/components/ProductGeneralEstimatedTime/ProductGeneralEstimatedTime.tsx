import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import EstimatedTimeContent from './EstimatedTimeContent';
import { PRODUCT_PERMISSIONS } from '../../constants';

const ProductGeneralEstimatedTime = () => {
  const { t } = useTranslation('product');
  const { onOneToggle, state } = useProductDetail();
  const open = useMemo(() => state?.form_6 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_6'), [onOneToggle]);


  return (
    <FormPaper
      mbHeader={!open ? '0px' : undefined}
      title={t('section.deliveryTime.title')}
      actions={
        <FormPaperAction
          onToggle={handleToggle}
          open={open}
          permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE}
        />
      }
    >
      <EstimatedTimeContent />
    </FormPaper>
  );
};

export default memo(ProductGeneralEstimatedTime);
