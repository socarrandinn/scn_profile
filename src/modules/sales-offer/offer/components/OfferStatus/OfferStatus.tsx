import { memo } from 'react';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { OFFER_STATUS } from '../../../common/constants/offer.enum';

type OfferStatusProps = {
  fromDate: Date;
  toDate: Date;
};

const OfferStatus = ({ fromDate, toDate }: OfferStatusProps) => {
  const { t } = useTranslation('offerOrder');
  const now = new Date();
  const from = new Date(fromDate);
  const to = new Date(toDate);

  if (now < from) {
    return <Chip size='small' variant='filled' color='default' label={t('status.SCHEDULED')} />;
  }
  if (now >= from && now <= to) {
    return <Chip size='small' variant='filled' color='primary' label={t('status.ACTIVE')} />;
  }

  if (now > to) return <Chip size='small' variant='filled' color='error' label={t('status.EXPIRED')} />;

  return <></>;
};

export default memo(OfferStatus);

export const renderOfferStatus = (from: Date, to: Date) => {
  return <OfferStatus fromDate={from} toDate={to} />;
};

export const getOfferOrderStatus = (_fromDate: Date, _toDate: Date) => {
  const now = new Date();
  const from = new Date(_fromDate);
  const to = new Date(_toDate);

  if (now < from) return OFFER_STATUS.SCHEDULED;
  if (now >= from && now <= to) return OFFER_STATUS.ACTIVE;
  if (now > to) return OFFER_STATUS.FINISHED;
};
