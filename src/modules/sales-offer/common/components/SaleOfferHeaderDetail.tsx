import { Close, Edit, Image } from '@mui/icons-material';
import { Avatar, Box, Button, Paper, Skeleton, Stack, Typography } from '@mui/material';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import OFFER_IMAGES from 'assets/images/offers';
import { useOfferContext } from '../../offer/contexts/OfferContext';
import OfferStackDetails from '../../product-discount/components/ProductDiscountDetailsHeader/OfferStackDetails';
import { DISCOUNT_TYPE } from '../../product-discount/constants';
import { ProductDiscountStatusCell } from 'modules/sales-offer/product-discount/components/ProductDiscountStatusCell';

import { getOfferOrderStatus } from 'modules/sales-offer/offer/components/OfferStatus/OfferStatus';
import { OFFER_PERMISSIONS } from 'modules/sales-offer/offer/constants';
import { PermissionCheck } from '@dfl/react-security';
import { OFFER_STATUS } from '../constants/offer.enum';

const SaleOfferHeaderDetail = () => {
  const { offer, isLoading } = useOfferContext();
  const { t } = useTranslation();
  // todo
  const status = useMemo(() => getOfferOrderStatus(offer.fromDate, offer.toDate), [offer.fromDate, offer.toDate]);
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
                    {/*   todo changes status */}
                    <ProductDiscountStatusCell value={status ?? ''} />

                    <PermissionCheck permissions={OFFER_PERMISSIONS.OFFER_WRITE}>
                      <EditButton />
                    </PermissionCheck>
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
                offerType={t(`offerOrder:types.${offer?.type as string}`)}
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default memo(SaleOfferHeaderDetail);

const EditButton = () => {
  const { t } = useTranslation('common');
  const { onOneToggle, onOneClose, state, offer } = useOfferContext();
  const open = useMemo(() => state?.form_general || false, [state]);
  const handleGeneralToggle = useCallback(() => onOneToggle?.('form_general'), [onOneToggle]);
  const handleRuleClose = useCallback(() => onOneClose?.('form_rules'), [onOneClose]);

  const status = useMemo(() => getOfferOrderStatus(offer?.fromDate, offer?.toDate), [offer?.fromDate, offer?.toDate]);
  const showEdit = useMemo(() => status !== OFFER_STATUS.FINISHED, [status]); // todo

  return (
    <Button
      disabled={!showEdit}
      variant='outlined'
      startIcon={open ? <Close /> : <Edit />}
      onClick={() => {
        handleGeneralToggle();
        handleRuleClose();
      }}
    >
      {open ? t('close') : t('edit')}
    </Button>
  );
};
