import { memo } from 'react'
import { IProductDiscount } from '../../interfaces'
import { DISCOUNT_TYPE } from '../../constants'

type Props = { data: IProductDiscount }

const ProductDiscountCell = ({ data }: Props) => {
  if (!data?.discount) return <></>

  return (
    <>
      - {data?.discount}{data?.discountType === DISCOUNT_TYPE.FIXED ? ' $' : ' %'}
    </>
  )
}

export default memo(ProductDiscountCell)
