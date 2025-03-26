import { Edit, Image } from '@mui/icons-material';
import { Avatar, Box, Button, Paper, Skeleton, Stack, Typography } from '@mui/material';
import { memo, useMemo } from 'react';
import { useProductDiscountDetails } from '../../contexts/ProductDiscountDetails';
import { ProductDiscountStatusCell } from '../ProductDiscountStatusCell';
import { ProductDiscountEnabledPicker } from '../ProductDiscountEnabledPicker';
import { useTranslation } from 'react-i18next';
import ProductDiscountDetailsHeaderContent from '../ProductDiscountDetailsHeader/ProductDiscountDetailsHeaderContent';
import { useToggle } from '@dfl/hook-utils';
import OfferStackDetails from './OfferStackDetails';

import OFFER_IMAGES from 'assets/images/offers';
import { OFFER_STATUS } from 'modules/sales-offer/common/constants/offer.enum';

const ProductDiscountDetailsHeader = () => {
  const { discount, isLoading } = useProductDiscountDetails();
  const { isOpen, onOpen, onClose } = useToggle(false);
  const { t } = useTranslation();

  const isFinalized = useMemo(() => discount?.status === OFFER_STATUS.FINISHED, [discount?.status]);

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
        <Stack
          sx={{ padding: { xs: 2, md: 2 } }}
          gap={{ xs: 2, md: 4 }}
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={'center'}
        >
          <Avatar
            variant='square'
            src={OFFER_IMAGES.productDiscount}
            sx={{
              height: 180,
              width: 166,
              backgroundColor: 'transparent',
              '& .MuiAvatar-img': {
                objectFit: 'contain',
                objectPosition: 'center',
              },
            }}
          >
            <Image />
          </Avatar>
          <Stack>
            <Stack
              sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
              }}
            >
              <Box>
                {isLoading ? (
                  <>
                    <Skeleton variant='text' sx={{ width: 250, mb: 1 }} />
                    <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
                      <Skeleton variant='rounded' sx={{ width: 100, height: 30 }} />
                      <Skeleton variant='rounded' sx={{ width: 100, height: 30 }} />
                      <Skeleton variant='rounded' sx={{ width: 100, height: 30 }} />
                    </Stack>
                  </>
                ) : (
                  <>
                    <Typography variant='h1' fontWeight={600} mb={1}>
                      {discount?.name}
                    </Typography>
                    <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
                      <ProductDiscountEnabledPicker
                        value={discount?.enabled as boolean}
                        rowId={discount?._id ?? ''}
                        readOnly={isFinalized}
                      />
                      {discount?.status && <ProductDiscountStatusCell value={discount?.status} />}
                      <Button
                        disabled={discount?.status === OFFER_STATUS.FINISHED}
                        startIcon={<Edit />}
                        size='small'
                        variant='outlined'
                        onClick={onOpen}
                      >
                        {t('edit')}
                      </Button>
                    </Stack>
                  </>
                )}
                <OfferStackDetails
                  isLoading={isLoading}
                  offer={discount}
                  offerType={t('productDiscount:productDiscount')}
                />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      )}
    </Paper>
  );
};

export default memo(ProductDiscountDetailsHeader);
