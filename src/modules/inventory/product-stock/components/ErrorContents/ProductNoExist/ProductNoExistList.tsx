import { memo } from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import { IStockDetailCallback } from '../../../interfaces/IStockSummary';
import { ItemContent } from '../../../styled/styled';
import { TransTypography } from 'components/TransTypography';
import { FlexBox, LongText } from '@dfl/mui-react-common';
import { ProductIcon } from 'modules/inventory/common/components/Icons/ProductIcon';
import { useTranslation } from 'react-i18next';
import { getFieldValue } from 'modules/inventory/product-stock/utils/stock';

type CountedItem = {
  code: string;
  productName: string;
  count: number;
};

const ProductNoExistList = ({ productNoExist }: Pick<IStockDetailCallback, 'productNoExist'>) => {
  const { t } = useTranslation('stock');
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
              <LongText lineClamp={2} text={getFieldValue(item?.productName, t('emptyValue.notName'))} />
              <Typography variant={'caption'} color={'text.secondary'}>
                {getFieldValue(item?.code, t('emptyValue.notCode'))}
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
