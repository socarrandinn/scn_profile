import { FormTextField } from '@dfl/mui-react-common';
import PercentIcon from '@mui/icons-material/Percent';
import { InputAdornment } from '@mui/material';
import { commonInputProps } from 'modules/common/constants/field.props';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type ProductDiscountValueFormProps = {
  discountType: string;
};

const ProductDiscountValueForm = ({ discountType }: ProductDiscountValueFormProps) => {
  const { t } = useTranslation('productDiscount');
  const isPercentType = useMemo(() => discountType === 'PERCENTAGE', [discountType]);

  return (
    <>
      <FormTextField
        type='number'
        name='discount'
        label={t('fields.discount')}
        inputProps={{
          ...commonInputProps,
          min: 0,
          max: !isPercentType && 100,
          step: isPercentType ? 0.1 : 0.01,
        }}
        InputProps={
          isPercentType
            ? {
                endAdornment: (
                  <InputAdornment position='start'>
                    <PercentIcon />
                  </InputAdornment>
                ),
              }
            : {}
        }
      />
    </>
  );
};

export default memo(ProductDiscountValueForm);
