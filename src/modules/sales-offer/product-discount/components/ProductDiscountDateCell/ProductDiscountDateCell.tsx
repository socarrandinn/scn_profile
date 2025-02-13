import { memo } from 'react'
import { IProductDiscount } from '../../interfaces'
import { AccessTime } from '@mui/icons-material'
import { DateValue } from '@dfl/mui-react-common'

type Props = { data: IProductDiscount }

const ProductDiscountDateCell = ({ data }: Props) => {
  if (!data?.startDate) return <>-</>

  return (
    <div className='flex items-center gap-2'>
      <AccessTime fontSize='small' />
      <DateValue value={data?.startDate} /> {data?.endDate && <>- <DateValue value={data?.endDate} /></>}
    </div>
  )
}

export default memo(ProductDiscountDateCell)
