import { Typography } from '@mui/material';
import { IDelivery } from 'modules/sales/settings/common/interfaces';
import { useTranslation } from 'react-i18next';

type Props = {
  data: IDelivery;
  type: 'normal' | 'express';
};

const TimeCell = ({ data, type }: Props) => {
  const { t } = useTranslation('common');

  if (type === 'express') {
    if (!data.hasExpress) return <>-</>;
    return (
      <Typography>
        {data?.expressTime?.from} - {data?.expressTime?.to} {t('common:days')}
      </Typography>
    );
  }

  return (
    <Typography>
      {data.time.from} - {data.time.to} {t('common:days')}
    </Typography>
  );
};

export default TimeCell;
