import { useParamsLink } from '@dfl/react-security';
import { ICausesIncidence } from '../../interfaces';
import { useTranslation } from 'react-i18next';
import { LongText } from '@dfl/mui-react-common';

type Props = {
  value: ICausesIncidence;
};
const CausesIncidenceClickableCell = ({ value }: Props) => {
  const { t } = useTranslation('causesIncidence');
  const handleEdit = useParamsLink({ edit: value?._id });

  if (!value?._id) return <>{t('notParentCauses')}</>;

  return (
    <LongText sx={{ cursor: 'pointer' }} color={'primary.main'} text={value.name} onClick={handleEdit} lineClamp={2} />
  );
};

export default CausesIncidenceClickableCell;
