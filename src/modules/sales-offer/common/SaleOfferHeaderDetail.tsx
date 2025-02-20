import { Edit, Image } from '@mui/icons-material';
import { Avatar, Box, Button, Paper, Skeleton, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import OFFER_IMAGES from 'assets/images/offers';
import { useOfferContext } from '../offer/contexts/OfferContext';
import OfferStackDetails from '../product-discount/components/ProductDiscountDetailsHeader/OfferStackDetails';
import { DISCOUNT_TYPE } from '../product-discount/constants';

const SaleOfferHeaderDetail = () => {
  const { offer, isLoading } = useOfferContext();
  const { t } = useTranslation();

  return (
    <Paper
      sx={{
        minHeight: 180,
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        mt: { xs: 1, md: 2 },
      }}
    >
      <Stack
        gap={{ xs: 2, md: 4 }}
        sx={{
          padding: { xs: 1, md: 2 },
        }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={'center'}
      >
        <Avatar
          variant='square'
          src={OFFER_IMAGES.orderOffer}
          sx={{
            height: 180,
            width: 166,
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
                    {offer?.name}
                  </Typography>
                  <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
                    {/*  <ProductDiscountEnabledPicker value={discount?.enabled as boolean} rowId={discount?._id ?? ''} />
                    {discount?.status && <ProductDiscountStatusCell value={discount?.status} />} */}
                    <Button
                      // disabled={offer?.status === DISCOUNT_STATUS.FINISHED}
                      startIcon={<Edit />}
                      size='small'
                      variant='outlined'
                      // onClick={onOpen}
                    >
                      {t('edit')}
                    </Button>
                  </Stack>
                </>
              )}
              <OfferStackDetails
                isLoading={isLoading}
                offer={{
                  discountConfig: {
                    type: offer?.discountValue.type as unknown as DISCOUNT_TYPE,
                    value: offer?.discountValue.value as number,
                  },
                  fromDate: offer?.fromDate as Date,
                  toDate: offer?.toDate as Date,
                }}
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default memo(SaleOfferHeaderDetail);
