import { useParamsLink } from '@dfl/react-security';
import { ICausesIncidence } from '../../interfaces';
import { LongText } from '@dfl/mui-react-common';

type Props = {
  value: ICausesIncidence;
};
const CausesIncidenceClickableCell = ({ value }: Props) => {
  const handleEdit = useParamsLink({ edit: value?._id });

  if (!value?._id) return <>-</>;

  return (
    <LongText sx={{ cursor: 'pointer' }} color={'primary.main'} text={value.name} onClick={handleEdit} lineClamp={2} />
  );
};

export default CausesIncidenceClickableCell;
