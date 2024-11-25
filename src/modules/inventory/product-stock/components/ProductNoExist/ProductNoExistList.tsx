import { memo } from 'react';
import { Stack } from '@mui/material';
import { IStockDetailCallback } from '../../interfaces/IStockSummary';
import { ItemContent } from '../../styled/styled';
import { LongText } from '@dfl/mui-react-common';
import { TransTypography } from 'components/TransTypography';

type CountedItem = {
  code: string;
  count: number;
};

const ProductNoExistList = ({ productNoExist }: Pick<IStockDetailCallback, 'productNoExist'>) => {
  const groupedAndCounted = productNoExist?.reduce<Record<string, CountedItem>>((acc, item) => {
    if (!acc[item.code]) {
      acc[item.code] = { code: item.code, count: 0 };
    }
    acc[item.code].count += 1;
    return acc;
  }, {});

  const result: CountedItem[] = Object.values(groupedAndCounted || []);

  return (
    <Stack gap={1}>
      {result?.map((item) => (
        <ItemContent key={item?.code}>
          <LongText lineClamp={1} text={<TransTypography message='stock:productCode' values={{ code: item?.code }} component='span' />} />
          <TransTypography message='stock:productCount' values={{ count: item?.count }} component='span' />
        </ItemContent>
      ))}
    </Stack>
  );
};

export default memo(ProductNoExistList);
