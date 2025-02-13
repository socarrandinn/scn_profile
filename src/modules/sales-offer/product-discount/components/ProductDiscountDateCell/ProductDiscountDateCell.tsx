import { memo } from 'react';
import { IProductDiscount } from '../../interfaces';
import { AccessTime } from '@mui/icons-material';
import { DateValue } from '@dfl/mui-react-common';
import { Chip, Stack } from '@mui/material';

type Props = { data: IProductDiscount };

const ProductDiscountDateCell = ({ data }: Props) => {
  if (!data?.fromDate) return <>-</>;

  return (
    <Chip
      icon={<AccessTime fontSize='small' />}
      variant='outlined'
      size='small'
      sx={{ borderRadius: '4px' }}
      label={
        <Stack alignItems={'center'} divider={<> - </>} sx={{ lineHeight: 1.2 }}>
          <DateValue value={data?.fromDate} />
          {data?.toDate && <DateValue value={data?.toDate} />}
        </Stack>
      }
    />
  );
};

export default memo(ProductDiscountDateCell);
