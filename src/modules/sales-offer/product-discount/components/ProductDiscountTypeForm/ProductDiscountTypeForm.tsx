import { FormToggleButtonGroup } from '@dfl/mui-react-common'
import { ToggleButton } from '@mui/material'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { DISCOUNT_TYPE } from '../../constants/product-discount.constant'

type ProductDiscountTypeFormProps = {}

const ProductDiscountTypeForm = (props: ProductDiscountTypeFormProps) => {
  const { t } = useTranslation('productDiscount')

  return (<>
    <FormToggleButtonGroup
      name='discountType'
      exclusive
      {...props}
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
