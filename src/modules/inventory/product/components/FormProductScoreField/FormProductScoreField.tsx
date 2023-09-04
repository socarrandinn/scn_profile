import { memo } from 'react';
import Box from '@mui/material/Box';
import FormSlider from 'modules/inventory/common/components/FormSlider/FormSlider';
import { productScoreMarks } from '../../constants/product-score-marks';
import { useDFLForm } from '@dfl/mui-react-common';
import FormHelperText from '@mui/material/FormHelperText';
import { useTranslation } from 'react-i18next';

const FormProductScoreField = () => {
  const { control } = useDFLForm();
  const { t } = useTranslation('product');

  return (
    <Box sx={{ width: '100%' }}>
      <FormSlider name={'score'} control={control} defaultValue={0} step={10} max={1000} marks={productScoreMarks} />
      <FormHelperText>{t('section.summary.score.textHelper')}</FormHelperText>
    </Box>
  );
};
export default memo(FormProductScoreField);
