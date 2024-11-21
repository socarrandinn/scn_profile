import { memo } from 'react';
import { Stack } from '@mui/material';
import { IStockDetailCallback } from '../../interfaces/IStockSummary';
import { ItemContent } from '../../styled/styled';
import { useTranslation } from 'react-i18next';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';

const ProductWithInvalidAreaList = ({
  productWithInvalidArea,
}: Pick<IStockDetailCallback, 'productWithInvalidArea'>) => {
  const { t } = useTranslation('stock');

  return (
    <Stack gap={1}>
      {productWithInvalidArea?.map((item) => (
        <ItemContent key={item?.code}>
          {/* <LongText lineClamp={1} text={item?.areaName} /> */}
          {/*  // todo obtener nombre del producto y el código del producto */}
          <AvatarNameCell
            link={`/inventory/products/${item?.code || ''}/general`}
            hideLink={!item?.code}
            hideImage
            name={item?.code || t('productNotCode')}
          />
        </ItemContent>
      ))}
    </Stack>
  );
};

export default memo(ProductWithInvalidAreaList);
