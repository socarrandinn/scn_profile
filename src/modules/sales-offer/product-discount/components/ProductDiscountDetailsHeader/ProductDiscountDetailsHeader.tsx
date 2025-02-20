import { Edit, Image } from '@mui/icons-material';
import { Avatar, Box, Button, Paper, Skeleton, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { useProductDiscountDetails } from '../../contexts/ProductDiscountDetails';
import { ProductDiscountStatusCell } from '../ProductDiscountStatusCell';
import { ProductDiscountEnabledPicker } from '../ProductDiscountEnabledPicker';
import { useTranslation } from 'react-i18next';
import ProductDiscountDetailsHeaderContent from '../ProductDiscountDetailsHeader/ProductDiscountDetailsHeaderContent';
import { useToggle } from '@dfl/hook-utils';
import Details from '../ProductDiscountDetail/Details';
import { DISCOUNT_STATUS } from '../../constants';
import OFFER_IMAGES from 'assets/images/offers';

const ProductDiscountDetailsHeader = () => {
  const { discount, isLoading } = useProductDiscountDetails();
  const { isOpen, onOpen, onClose } = useToggle(false);
  const { t } = useTranslation();

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
            src={OFFER_IMAGES.productDiscount}
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
                      <ProductDiscountEnabledPicker value={discount?.enabled as boolean} rowId={discount?._id ?? ''} />
                      {discount?.status && <ProductDiscountStatusCell value={discount?.status} />}
                      <Button
                        disabled={discount?.status === DISCOUNT_STATUS.FINISHED}
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
