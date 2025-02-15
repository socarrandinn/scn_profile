import { Image } from '@mui/icons-material';
import { Avatar, Box, Button, Paper, Stack } from '@mui/material';
import { memo, useMemo } from 'react';
import productOffer from 'assets/images/offers/product-offer.webp';
import { TransTypography } from 'components/TransTypography';
import { useProductDiscountDetails } from '../../contexts/ProductDiscountDetails';
import { DISCOUNT_TYPE } from '../../constants';
import { ProductDiscountStatusCell } from '../ProductDiscountStatusCell';
import { ProductDiscountEnabledPicker } from '../ProductDiscountEnabledPicker';
import { useTranslation } from 'react-i18next';
import ProductDiscountDetailsHeaderContent from '../ProductDiscountDetailsHeader/ProductDiscountDetailsHeaderContent';
import { useToggle } from '@dfl/hook-utils';
import Details from '../ProductDiscountDetail/Details';

const ProductDiscountDetailsHeader = () => {
  const { discount } = useProductDiscountDetails();
  const { isOpen, onOpen, onClose } = useToggle(false);
  const { t } = useTranslation();

  const value = useMemo(
    () =>
      `${discount?.discountConfig?.value ?? 0}${
        discount?.discountConfig?.type && discount?.discountConfig?.type === DISCOUNT_TYPE.PERCENT ? '%' : '$'
      }`,
    [discount?.discountConfig?.type, discount?.discountConfig?.value],
  );

  return (
    <Paper
      sx={{
        minHeight: 180,
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
      }}
    >
      {isOpen ? (
        <Box sx={{ padding: { xs: 2, md: 3 }, width: '100%' }}>
          <ProductDiscountDetailsHeaderContent onClose={onClose} />
        </Box>
      ) : (
        <Stack gap={2} flexDirection={{ xs: 'column', sm: 'row' }} alignItems={'center'}>
          <Avatar
            variant='square'
            src={productOffer}
            sx={{
              height: 180,
              width: 166,
            }}
          >
            <Image />
          </Avatar>
          <Stack sx={{ paddingY: { xs: 2, md: 3 }, paddingRight: { xs: 2, md: 3 } }}>
            <Stack
              sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
              }}
            >
              <Box>
                <TransTypography
                  variant='h1'
                  fontWeight={600}
                  message='productDiscount:detail.title'
                  values={{ discount: value }}
                  mb={1}
                />
                <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
                  <ProductDiscountEnabledPicker value={discount?.enabled as boolean} rowId={discount?._id ?? ''} />
                  {discount?.status && <ProductDiscountStatusCell value={discount?.status} />}
                  <Button size='small' variant='outlined' onClick={onOpen}>
                    {t('edit')}
                  </Button>
                </Stack>
                <Details />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      )}
    </Paper>
  );
};

export default memo(ProductDiscountDetailsHeader);
