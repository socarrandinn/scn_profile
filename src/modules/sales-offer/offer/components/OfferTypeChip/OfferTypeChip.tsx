import { Chip } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  type: string;
};

const OfferTypeChip = ({ type }: Props) => {
  const { t } = useTranslation('orderOffer');
  return <Chip variant='outlined' size='small' label={t(`types.${type}`)} />;
};

export default memo(OfferTypeChip);

export const renderOfferTypeChip = (type: string) => {
  return <OfferTypeChip type={type} />;
};
