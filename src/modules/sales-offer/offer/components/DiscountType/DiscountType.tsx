import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { InputAdornment, ToggleButton, Stack } from '@mui/material';
import { FormTextField } from '@dfl/mui-react-common';
import { SFormToggleButtonGroup } from './styled';
import { DISCOUNT_VALUE_TYPE } from '../../interfaces/offer.type.enum';

type DiscountTypeProps = {
  discountValueType: DISCOUNT_VALUE_TYPE;
  handleDiscountValueType: (env: any) => void;
};

const DiscountType = ({ discountValueType, handleDiscountValueType }: DiscountTypeProps) => {
  const { t } = useTranslation('offerOrder');

  return (
    <Stack gap={2}>
      <Stack flexDirection={'row'} gap={3}>
        <SFormToggleButtonGroup
          name={'discountValue.type'}
          exclusive
          defaultValue={DISCOUNT_VALUE_TYPE.PERCENT}
          sx={{
            maxWidth: '40%',
          }}
          onClick={handleDiscountValueType}
        >
          <ToggleButton
            value={DISCOUNT_VALUE_TYPE.PERCENT}
            aria-label={t('discountShippingType.amount')}
            size={'small'}
          >
            {t('discountShippingType.percent')}
          </ToggleButton>
          <ToggleButton value={DISCOUNT_VALUE_TYPE.FIXED} aria-label={t('discountShippingType.amount')} size={'small'}>
            {t('discountShippingType.amount')}
          </ToggleButton>
        </SFormToggleButtonGroup>
        <FormTextField
          required
          name='discountValue.value'
          size={'small'}
          sx={{ flexGrow: 1 }}
          type='number'
          placeholder={
            discountValueType === DISCOUNT_VALUE_TYPE.PERCENT
              ? t('discountShippingType.percent')
              : t('discountShippingType.amount')
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                {discountValueType === DISCOUNT_VALUE_TYPE.PERCENT ? '%' : '$'}
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

export default memo(DiscountType);
