import { ChildrenProps, DateValue } from '@dfl/mui-react-common';
import { Stack } from '@mui/material';
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
  const { discount } = useProductDiscountDetails();
  const format = 'MM/dd/yy hh:mm a';

  const components = {
    toDate: <DateValue value={discount?.toDate as Date} format={format} />,
    fromDate: <DateValue value={discount?.fromDate as Date} format={format} />,
  };

  return (
    <Stack flexDirection={'row'} alignItems={'center'} gap={{ xs: 0.5, md: 2 }} mt={2} flexWrap={'wrap'}>
      <Stack gap={0.5}>
        <DetailItem icon={<TypeIcon />}>
          <TransTypography
            message={'productDiscount:detail:item:type'}
            values={{ discountType: t('productDiscount') }}
          />
        </DetailItem>
        <DetailItem icon={<FromDateIcon />}>
          <TransTypography message={'productDiscount:detail:item:fromDate'} components={components} />
        </DetailItem>
      </Stack>
      <Stack gap={0.5}>
        <DetailItem icon={<DiscountIcon />}>
          <TransTypography
            message={'productDiscount:detail:item:discount'}
            values={{
              type: t(`discountTypes.${discount?.discountConfig?.type as string}`),
              discount: discount?.discountConfig?.value,
            }}
          />
        </DetailItem>
        <DetailItem icon={<ToDateIcon />}>
          <TransTypography message={'productDiscount:detail:item:toDate'} components={components} />
        </DetailItem>
      </Stack>
    </Stack>
  );
};

export default memo(Details);

type Props = ChildrenProps & {
  icon?: ReactNode;
};
const DetailItem = ({ icon, children }: Props) => {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1,
        flex: 1,
      }}
    >
      {icon}
      {children}
    </Stack>
  );
};
