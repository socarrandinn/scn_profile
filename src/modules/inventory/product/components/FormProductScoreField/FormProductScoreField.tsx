import Box from '@mui/material/Box';
import FormSlider from 'modules/inventory/common/components/FormSlider/FormSlider';
import { productScoreMarks } from '../../constants/product-score-marks';
import { useDFLForm } from '@dfl/mui-react-common';

const valueText = (value: number) => {
  return `${value}0`;
};

export default function FormProductScoreField() {
  const { control } = useDFLForm();

  return (
    <Box sx={{ width: '100%' }}>
      <FormSlider
        name={'score'}
        control={control}
        defaultValue={0}
        step={1}
        getAriaValueText={valueText}
        marks={productScoreMarks}
      />
    </Box>
  );
}
