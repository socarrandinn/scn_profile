import { memo } from 'react';
import { Stack } from '@mui/material';
import { IStockDetailCallback } from '../../interfaces/IStockSummary';
import { ItemContent } from '../../styled/styled';
import { LongText } from '@dfl/mui-react-common';
import { TransTypography } from 'components/TransTypography';

const InvalidAreaList = ({ invalidArea }: Pick<IStockDetailCallback, 'invalidArea'>) => {
  return (
    <Stack gap={1}>
      {invalidArea?.map((item) => (
        <ItemContent key={item?.areaName}>
          <LongText lineClamp={1} text={item?.areaName} />
          <TransTypography message='stock:productCount' values={{ count: item?.productCount }} component='span' />
        </ItemContent>
      ))}
    </Stack>
  );
};

export default memo(InvalidAreaList);
