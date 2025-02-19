import { Typography } from '@mui/material';
import { FeaturePricePayload } from 'modules/sales/settings/home-delivery/interfaces';
import { useTranslation } from 'react-i18next';

type Props = {
  value: FeaturePricePayload;
  unit?: string;
};

export const CostCellByUnit = ({ value, unit }: Props) => {
  const { t } = useTranslation('common');
  return <Typography>${value?.price} {t('each')} {value?.value}{unit}</Typography>;
};