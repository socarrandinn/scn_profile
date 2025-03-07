import { useParamsLink } from '@dfl/react-security';
import { ICausesIncidence } from '../../interfaces';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

type Props = {
  value: ICausesIncidence;
};
const CausesIncidenceClickableCell = ({ value }: Props) => {
  const { t } = useTranslation('causesIncidence');
  const handleEdit = useParamsLink({ edit: value?._id });

  if (!value?._id) return <>{t('notParentCauses')}</>;

  return (
    <Button variant='text' sx={{ p: 0 }} onClick={handleEdit}>
      {value.name}
    </Button>
  );
};

export default CausesIncidenceClickableCell;
