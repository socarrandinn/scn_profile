import { memo } from 'react';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { INCIDENCE_STATUS } from '../../constants/incidence-status';

type Props = { value: INCIDENCE_STATUS };

const STATUS_COLOR: Record<INCIDENCE_STATUS, 'primary' | 'error' | 'success' | 'warning' | 'info' | undefined> = {
  [INCIDENCE_STATUS.OPEN]: 'warning',
  [INCIDENCE_STATUS.IN_REVIEW]: 'warning',
  [INCIDENCE_STATUS.RESOLVED]: 'success',
  [INCIDENCE_STATUS.CLOSED]: 'info',
};

const IncidenceStatusCell = ({ value }: Props) => {
  const { t } = useTranslation('incidence');

  if (!value) return <></>;

  return <Chip variant='filled' label={t(`status.${value}`)} size='small' color={STATUS_COLOR[value]} />;
};

export default memo(IncidenceStatusCell);
