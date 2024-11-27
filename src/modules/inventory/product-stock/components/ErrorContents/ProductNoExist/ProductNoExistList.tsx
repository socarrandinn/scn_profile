import { memo } from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import { IStockDetailCallback } from '../../../interfaces/IStockSummary';
import { ItemContent } from '../../../styled/styled';
import { TransTypography } from 'components/TransTypography';
import { FlexBox, LongText } from '@dfl/mui-react-common';
import { ProductIcon } from 'modules/inventory/common/components/Icons/ProductIcon';

type CountedItem = {
  code: string;
  productName: string;
  count: number;
};

const ProductNoExistList = ({ productNoExist }: Pick<IStockDetailCallback, 'productNoExist'>) => {
  const groupedAndCounted = productNoExist?.reduce<Record<string, CountedItem>>((acc, item) => {
    if (!acc[item.code]) {
      acc[item.code] = { code: item.code, productName: item.productName, count: 0 };
    }
    acc[item.code].count += 1;
    return acc;
  }, {});

  const result: CountedItem[] = Object.values(groupedAndCounted || []);

  return (
    <Stack gap={1}>
      {result?.map((item) => (
        <ItemContent key={item?.code}>
          <FlexBox alignItems={'center'} gap={1}>
            <Avatar sx={{ width: 32, height: 32 }} variant={'rounded'}>
              <ProductIcon fontSize='small' />
            </Avatar>
            <FlexBox flexDirection={'column'} gap={0}>
              <LongText lineClamp={2} text={item?.productName} />
              <Typography variant={'caption'} color={'text.secondary'}>
                {item?.code}
              </Typography>
            </FlexBox>
          </FlexBox>
          <TransTypography message='stock:productCount' values={{ count: item?.count }} component='span' />
        </ItemContent>
      ))}
    </Stack>
  );
};

export default memo(ProductNoExistList);
