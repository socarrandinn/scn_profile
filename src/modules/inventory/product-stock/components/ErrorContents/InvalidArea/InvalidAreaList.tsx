import { memo } from 'react';
import { Stack } from '@mui/material';
import { IStockDetailCallback } from '../../../interfaces/IStockSummary';
import { ItemContent } from '../../../styled/styled';
import { LongText } from '@dfl/mui-react-common';
import { TransTypography } from 'components/TransTypography';
import { useTranslation } from 'react-i18next';
import { getFieldValue } from 'modules/inventory/product-stock/utils/stock';

const InvalidAreaList = ({ invalidArea }: Pick<IStockDetailCallback, 'invalidArea'>) => {
  const { t } = useTranslation('stock');
  return (
    <Stack gap={1}>
      {invalidArea?.map((item) => (
        <ItemContent key={item?.areaName}>
          <LongText lineClamp={1} text={getFieldValue(item?.areaName, t('emptyValue.notArea'))} />
          <TransTypography message='stock:productCount' values={{ count: item?.productCount }} component='span' />
        </ItemContent>
      ))}
    </Stack>
  );
};

export default memo(InvalidAreaList);
