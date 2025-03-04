import { memo } from 'react';
import { CAUSES_INCIDENCE_TYPE_ENUM } from '../../interfaces';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TagList } from '@dfl/mui-react-common';

type CausesIncidenceTypeCellProps = {
  childCauses: CAUSES_INCIDENCE_TYPE_ENUM[];
};

const CausesIncidenceTypeCell = ({ childCauses }: CausesIncidenceTypeCellProps) => {
  const { t } = useTranslation('causesIncidence');

  return (
    <TagList
      value={childCauses}
      limit={3}
      renderTag={(cause: CAUSES_INCIDENCE_TYPE_ENUM) => <Chip label={t(`cause.${cause}`)} />}
    />
  );
};

export default memo(CausesIncidenceTypeCell);
