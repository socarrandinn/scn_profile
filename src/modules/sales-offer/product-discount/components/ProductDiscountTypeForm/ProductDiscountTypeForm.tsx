import { FormLabel, FormToggleButtonGroup } from '@dfl/mui-react-common'
import { ToggleButton } from '@mui/material'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { DISCOUNT_TYPE } from '../../constants/product-discount.constant'

type ProductDiscountTypeFormProps = { dark?: boolean }

const ProductDiscountTypeForm = ({ dark, ...props }: ProductDiscountTypeFormProps) => {
  const { t } = useTranslation('productDiscount')  
  return (<>
    <FormLabel label={t('fields.discountType')} />
    <FormToggleButtonGroup
      name='discountType'
      exclusive
      {...props}
      dark
    >
      {
        Object.values(DISCOUNT_TYPE).map(type =>
          <ToggleButton key={type} value={type}>
            {t(`discountTypes.${ type }`)}
          </ToggleButton>)
      }
    </FormToggleButtonGroup>
  </>)
}

export default memo(ProductDiscountTypeForm)
