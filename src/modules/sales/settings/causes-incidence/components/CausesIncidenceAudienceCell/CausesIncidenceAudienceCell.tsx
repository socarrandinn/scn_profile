import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

type Props = {
  value: any[];
};
const CausesIncidenceAudienceCell = ({ value }: Props) => {
  const { t } = useTranslation('causesIncidence');

  if (!value) return <>{t('notAudience')}</>;

  return <Typography fontWeight={'bold'}>{`(${value?.length}) ${t('notification.audience')}`}</Typography>;
};

export default CausesIncidenceAudienceCell;
