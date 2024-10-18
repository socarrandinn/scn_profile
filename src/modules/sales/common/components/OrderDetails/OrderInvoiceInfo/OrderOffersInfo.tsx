/* import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PaperSection } from 'components/PaperSection';
import { Box, Divider, Tooltip, Typography } from '@mui/material';
import { CurrencyValue, DetailStack, DetailStackItemRecord, FlexBox, HandlerError } from '@dfl/mui-react-common';
import { isArray } from 'lodash';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const findOfferWALLET_CREDIT = (offers?: any[]) => {
  return offers?.find((off) => off.type === OFFER_TYPE.WALLET_CREDIT);
};

const findAllOfferINCLUDE_PRODUCT = (offers?: any[]) => {
  return offers?.find((off) => off.type === OFFER_TYPE.INCLUDE_PRODUCT);
};
const findAllOfferPRODUCT_DISCOUNT = (offers?: any[]) => {
  return offers?.find((off) => off.type === OFFER_TYPE.PRODUCT_DISCOUNT);
};

const findAllOfferSHIPPING_DISCOUNT = (offers?: any[]) => {
  return offers?.find((off) => off.type === OFFER_TYPE.SHIPPING_DISCOUNT);
};

const findAllOfferCOIN_CREDIT = (offers?: any[]) => {
  return offers?.find((off) => off.type === OFFER_TYPE.COIN_CREDIT);
};

const findAllOfferTOTAL_DISCOUNT = (offers?: any[]) => {
  return offers?.find((off) => off.type === OFFER_TYPE.TOTAL_DISCOUNT);
};

const details: DetailStackItemRecord[] = [
  {
    label: 'order:invoice.express',
    render: ({ amount }: IOrder) => {
      if (!Number(amount?.details?.expressShipping)) return null;
      return <CurrencyValue value={amount?.details?.expressShipping || 0} />;
    },
    translate: true,
    hideEmpty: true,
  },
  {
    label: 'order:invoice.includeProduct',
    translate: true,
    forceMultiline: true,
    render: ({ offers }: IOrder) => {
      const offer = findAllOfferINCLUDE_PRODUCT(offers);
      if (!offer) return null;

      if (isArray(offer)) {
        offer.map((item: any, index: number) => (
          <FlexBox gap={1}>
            <Tooltip
              title={
                <Box key={index}>
                  <Typography fontSize={'small'}>{item?.description}</Typography>
                  {item?.description?.length - 1 !== index && <hr />}
                </Box>
              }
            >
              <HelpOutlineOutlinedIcon fontSize={'small'} />
            </Tooltip>
            <CurrencyValue value={item?.valueDiscount} />
          </FlexBox>
        ));
      } else {
        return (
          <FlexBox gap={1}>
            <Tooltip
              title={
                <Box>
                  <Typography fontSize={'small'}>{offer?.description}</Typography>
                </Box>
              }
            >
              <HelpOutlineOutlinedIcon fontSize={'small'} />
            </Tooltip>
            <CurrencyValue value={offer?.valueDiscount} />
          </FlexBox>
        );
      }
    },
    hideEmpty: true,
  },
  {
    label: 'order:invoice.totalDiscount',
    translate: true,
    forceMultiline: true,
    render: ({ offers }: IOrder) => {
      const offer = findAllOfferTOTAL_DISCOUNT(offers);
      if (!offer) return null;

      if (isArray(offer)) {
        offer.map((item: any, index: number) => (
          <FlexBox gap={1}>
            <Tooltip
              title={
                <Box key={index}>
                  <Typography fontSize={'small'}>{item?.description}</Typography>
                  {item?.description?.length - 1 !== index && <hr />}
                </Box>
              }
            >
              <HelpOutlineOutlinedIcon fontSize={'small'} />
            </Tooltip>
            <CurrencyValue value={item?.valueDiscount} />
          </FlexBox>
        ));
      } else {
        return (
          <FlexBox gap={1}>
            <Tooltip
              title={
                <Box>
                  <Typography fontSize={'small'}>{offer?.description}</Typography>
                </Box>
              }
            >
              <HelpOutlineOutlinedIcon fontSize={'small'} />
            </Tooltip>
            <CurrencyValue value={offer?.valueDiscount} />
          </FlexBox>
        );
      }
    },
    hideEmpty: true,
  },
  {
    label: 'order:invoice.productDiscount',
    translate: true,
    forceMultiline: true,
    render: ({ offers }: IOrder) => {
      const offer = findAllOfferPRODUCT_DISCOUNT(offers);
      if (!offer) return null;

      if (isArray(offer)) {
        offer.map((item: any, index: number) => (
          <FlexBox gap={1}>
            <Tooltip
              title={
                <Box key={index}>
                  <Typography fontSize={'small'}>{item?.description}</Typography>
                  {item?.description?.length - 1 !== index && <hr />}
                </Box>
              }
            >
              <HelpOutlineOutlinedIcon fontSize={'small'} />
            </Tooltip>
            <CurrencyValue value={item?.valueDiscount} />
          </FlexBox>
        ));
      } else {
        return (
          <FlexBox gap={1}>
            <Tooltip
              title={
                <Box>
                  <Typography fontSize={'small'}>{offer?.description}</Typography>
                </Box>
              }
            >
              <HelpOutlineOutlinedIcon fontSize={'small'} />
            </Tooltip>
            <CurrencyValue value={offer?.valueDiscount} />
          </FlexBox>
        );
      }
    },
    hideEmpty: true,
  },
  {
    label: 'order:invoice.shippingDiscount',
    translate: true,
    forceMultiline: true,
    render: ({ offers }: IOrder) => {
      const offer = findAllOfferSHIPPING_DISCOUNT(offers);
      if (!offer) return null;

      if (isArray(offer)) {
        offer.map((item: any, index: number) => (
          <FlexBox gap={1}>
            <Tooltip
              title={
                <Box key={index}>
                  <Typography fontSize={'small'}>{item?.description}</Typography>
                  {item?.description?.length - 1 !== index && <hr />}
                </Box>
              }
            >
              <HelpOutlineOutlinedIcon fontSize={'small'} />
            </Tooltip>
            <CurrencyValue value={item?.valueDiscount} />
          </FlexBox>
        ));
      } else {
        return (
          <FlexBox gap={1}>
            <Tooltip
              title={
                <Box>
                  <Typography fontSize={'small'}>{offer?.description}</Typography>
                </Box>
              }
            >
              <HelpOutlineOutlinedIcon fontSize={'small'} />
            </Tooltip>
            <CurrencyValue value={offer?.valueDiscount} />
          </FlexBox>
        );
      }
    },
    hideEmpty: true,
  },
  {
    label: 'order:invoice.point',
    translate: true,
    forceMultiline: true,
    render: ({ offers }: IOrder) => {
      const offer = findAllOfferCOIN_CREDIT(offers);
      if (!offer) return null;

      if (isArray(offer)) {
        offer.map((item: any, index: number) => (
          <FlexBox gap={1}>
            <Tooltip
              title={
                <Box key={item}>
                  <Typography fontSize={'small'}>{item?.description}</Typography>
                  {item?.description?.length - 1 !== index && <hr />}
                </Box>
              }
            >
              <HelpOutlineOutlinedIcon fontSize={'small'} />
            </Tooltip>
            <Typography>{item?.creditAmount}</Typography>
          </FlexBox>
        ));
      } else {
        return (
          <FlexBox gap={1}>
            <Tooltip
              title={
                <Box>
                  <Typography fontSize={'small'}>{offer?.description}</Typography>
                </Box>
              }
            >
              <HelpOutlineOutlinedIcon fontSize={'small'} />
            </Tooltip>
            <Typography>{offer?.creditAmount}</Typography>
          </FlexBox>
        );
      }
    },
    hideEmpty: true,
  },
];

const creditos: DetailStackItemRecord[] = [
  {
    label: 'order:invoice.credit',
    translate: true,
    forceMultiline: true,
    render: ({ offers }: IOrder) => {
      const offer = findOfferWALLET_CREDIT(offers);
      if (!offer) return null;
      return (
        <FlexBox gap={1}>
          <OrderDiscountInfo offers={offers} />
          <CurrencyValue value={offer?.creditAmount} />
        </FlexBox>
      );
    },
    hideEmpty: true,
  },
];

const cupones: DetailStackItemRecord[] = [
  {
    label: 'order:invoice.cupon',
    translate: true,
    forceMultiline: true,
    render: ({ coupon, amount }: IOrder) => {
      if (!coupon) return null;
      const finalValue =
        coupon?.type === 'PERCENT' ? (+coupon?.value / 100) * amount?.details?.products : coupon?.value || 0;
      return (
        <>
          <FlexBox gap={1}>
            <Tooltip
              title={
                <Box key={coupon?._id}>
                  <Typography fontSize={'small'}>{coupon?.name}</Typography>
                </Box>
              }
            >
              <HelpOutlineOutlinedIcon fontSize={'small'} />
            </Tooltip>
            <CurrencyValue value={finalValue} />
          </FlexBox>
          <Divider />
        </>
      );
    },
    hideEmpty: true,
  },
];

const OrderOffersInfo = () => {
  const { t } = useTranslation('order');
  const { isLoading, data, error } = useOrderDetail();

  if (isLoading) return <OrderInfoSkeleton row={2} />;

  if (error) {
    return (
      <PaperSection title={t('order.offers')}>
        <HandlerError error={error} />
      </PaperSection>
    );
  }

  return (
    <PaperSection title={t('order.offers')} titleMb={1}>
      <DetailStack details={details} data={data} />
      <Divider />
      <DetailStack details={cupones} data={data} />
      <DetailStack details={creditos} data={data} />
    </PaperSection>
  );
};

export default memo(OrderOffersInfo);
 */
export const OrderOffersInfo = () => <></>;
