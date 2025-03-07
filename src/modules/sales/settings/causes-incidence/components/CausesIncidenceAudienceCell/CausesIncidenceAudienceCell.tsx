import { useTranslation } from 'react-i18next';

type Props = {
  value: any[];
};
const CausesIncidenceAudienceCell = ({ value }: Props) => {
  const { t } = useTranslation('causesIncidence');

  if (!value) return <>{t('notAudience')}</>;

  return <div>{`(${value?.length}) ${t('notification.audience')}`}</div>;
};

export default CausesIncidenceAudienceCell;
