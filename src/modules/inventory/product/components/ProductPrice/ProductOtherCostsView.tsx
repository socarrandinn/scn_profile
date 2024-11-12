import { Box, Typography } from '@mui/material';
import { memo, useMemo } from 'react';
import { TFunction, useTranslation } from 'react-i18next';
import { IDistributionPrice, IOtherCost, PriceType } from '../../interfaces/IProductPriceDetails';
import { DetailList } from 'components/DetailList';

const renderOtherCosts = (data: IOtherCost[], t: TFunction) => {
  if (!data?.length) {
    return <Typography>{t('common:noInfo')}</Typography>;
  }
  return (
    <>
      {data?.map((otherCost, index) => (
        <Box key={index}>
          <Box className='flex items-center gap-2'>
            <Typography color='text.secondary'>{t('common:provider.type')}:</Typography>
            <Typography>{otherCost?.ownershipType}</Typography>
          </Box>
          <Box className='flex items-center gap-2'>
            <Typography color='text.secondary'>{t('common:provider.title')}:</Typography>
            <Typography>{otherCost?.ownershipName}</Typography>
          </Box>
          <Box className='flex items-center gap-2'>
            <Typography color='text.secondary'>{t('common:cost')}:</Typography>
            <Typography>{otherCost?.type === PriceType.FIXED && '$'}{otherCost?.value}{otherCost?.type === PriceType.PERCENT && '%'}</Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

interface Props {
  data: IDistributionPrice | undefined;
  isLoading: boolean;
}

const ProductOtherCostView = ({ data, isLoading }: Props) => {
  const { t } = useTranslation('provider');

  const otherCostData = useMemo(() => {
    if (!data) {
      return [];
    } else {
      return Object.entries(data)?.map(([key, value]) => {
        let component;
        if (key === 'otherCost') {
          component = renderOtherCosts(value, t);
        }
        return {
          key,
          label: t(`section.prices.${key}`),
          value: component,
        };
      });
    }
  }, [data, t]);

  return (
    <DetailList
      data={otherCostData}
      isLoading={isLoading}
      firstColumnSx={{ width: { xs: 170, lg: 450, xl: 550 }, color: 'text.secondary' }}
      secondColumnSx={{ width: { xs: 170, xl: 100 } }}
    />
  );
};

export default memo(ProductOtherCostView);
