import { ChildrenProps, DateValue } from '@dfl/mui-react-common';
import { Skeleton, Stack } from '@mui/material';
import { TransTypography } from 'components/TransTypography';
import { memo, ReactNode } from 'react';
import TypeIcon from './icons/TypeIcon';
import { useTranslation } from 'react-i18next';
import { useProductDiscountDetails } from '../../contexts/ProductDiscountDetails';

import {} from 'date-fns';
import FromDateIcon from './icons/FromDateIcon';
import DiscountIcon from './icons/DiscountIcon';
import ToDateIcon from './icons/ToDateIcon';

const Details = () => {
  const { t } = useTranslation('productDiscount');
  const { discount, isLoading } = useProductDiscountDetails();
  const format = 'MM/dd/yy hh:mm a';

  const components = {
    toDate: <DateValue value={discount?.toDate as Date} format={format} />,
    fromDate: <DateValue value={discount?.fromDate as Date} format={format} />,
  };

  return (
    <Stack flexDirection={'row'} alignItems={'center'} gap={{ xs: 0.5, md: 2 }} mt={2} flexWrap={'wrap'}>
      <Stack gap={0.5}>
        <DetailItem icon={<TypeIcon />} isLoading={isLoading}>
          <TransTypography
            message={'productDiscount:detail:item:type'}
            values={{ discountType: t('productDiscount') }}
          />
        </DetailItem>
        <DetailItem icon={<FromDateIcon />} isLoading={isLoading}>
          <TransTypography message={'productDiscount:detail:item:fromDate'} components={components} />
        </DetailItem>
      </Stack>
      <Stack gap={0.5}>
        <DetailItem icon={<DiscountIcon />} isLoading={isLoading}>
          <TransTypography
            message={'productDiscount:detail:item:discount'}
            values={{
              type: t(`discountTypes.${discount?.discountConfig?.type as string}`),
              discount: discount?.discountConfig?.value,
            }}
          />
        </DetailItem>
        <DetailItem icon={<ToDateIcon />} isLoading={isLoading}>
          <TransTypography message={'productDiscount:detail:item:toDate'} components={components} />
        </DetailItem>
      </Stack>
    </Stack>
  );
};

export default memo(Details);

type Props = ChildrenProps & {
  icon?: ReactNode;
  isLoading?: boolean;
};
const DetailItem = ({ icon, children, isLoading }: Props) => {
  const sx = {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
    flex: 1,
  };
  if (isLoading) {
    return (
      <Stack sx={sx}>
        <Skeleton variant='circular' sx={{ width: 24, height: 24 }} />
        <Skeleton variant='text' sx={{ width: 240 }} />
      </Stack>
    );
  }

  return (
    <Stack sx={sx}>
      {icon}
      {children}
    </Stack>
  );
};
