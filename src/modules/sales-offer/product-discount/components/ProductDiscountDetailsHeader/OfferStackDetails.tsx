import { ChildrenProps, DateValue } from '@dfl/mui-react-common';
import { Skeleton, Stack } from '@mui/material';
import { TransTypography } from 'components/TransTypography';
import { memo, ReactNode, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import TypeIcon from 'components/icons/offer-sales/TypeIcon';
import FromDateIcon from 'components/icons/offer-sales/FromDateIcon';
import DiscountIcon from 'components/icons/offer-sales/DiscountIcon';
import ToDateIcon from 'components/icons/offer-sales/ToDateIcon';
import { IProductDiscount } from '../../interfaces';

type DetailProps = {
  isLoading?: boolean;
  offerType?: string;
  offer?: Pick<IProductDiscount, 'fromDate' | 'toDate' | 'discountConfig'>;
};
const OfferStackDetails = ({ isLoading, offer, offerType }: DetailProps) => {
  const { t } = useTranslation();
  const format = 'MM/dd/yy hh:mm a';

  const components = {
    toDate: <DateValue value={offer?.toDate as Date} format={format} />,
    fromDate: <DateValue value={offer?.fromDate as Date} format={format} />,
  };

  const value = useMemo(() => {
    if (offer?.discountConfig?.type === 'FIXED') {
      return `$${offer?.discountConfig?.value}`;
    }
    return `${offer?.discountConfig?.value as number}%`;
  }, [offer?.discountConfig?.type, offer?.discountConfig?.value]);

  return (
    <Stack flexDirection={'row'} alignItems={'center'} gap={{ xs: 0.5, md: 2 }} mt={2} flexWrap={'wrap'}>
      <Stack gap={0.5}>
        <DetailItem icon={<TypeIcon />} isLoading={isLoading}>
          <TransTypography message={'offerOrder:details:item:type'} values={{ type: offerType }} />
        </DetailItem>
        <DetailItem icon={<FromDateIcon />} isLoading={isLoading}>
          <TransTypography message={'offerOrder:details:item:fromDate'} components={components} />
        </DetailItem>
      </Stack>
      <Stack gap={0.5}>
        <DetailItem icon={<DiscountIcon />} isLoading={isLoading}>
          <TransTypography
            message={'offerOrder:details:item:discount'}
            values={{
              type: t(`offers:discountTypes.${offer?.discountConfig?.type as string}`),
              discount: value,
            }}
          />
        </DetailItem>
        <DetailItem icon={<ToDateIcon />} isLoading={isLoading}>
          <TransTypography message={'offerOrder:details:item:toDate'} components={components} />
        </DetailItem>
      </Stack>
    </Stack>
  );
};

export default memo(OfferStackDetails);

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
