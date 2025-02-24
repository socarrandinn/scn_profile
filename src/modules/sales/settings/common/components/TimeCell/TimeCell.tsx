import { Typography } from '@mui/material';
import { TimeRange } from 'modules/sales/settings/home-delivery/interfaces';
import { useTranslation } from 'react-i18next';

type Props = {
  time: TimeRange;
};

const TimeCell = ({ time }: Props) => {
  const { t } = useTranslation('common');

  return <Typography>{time?.from}-{time?.to} {t('common:days')}</Typography>;
};

export default TimeCell;