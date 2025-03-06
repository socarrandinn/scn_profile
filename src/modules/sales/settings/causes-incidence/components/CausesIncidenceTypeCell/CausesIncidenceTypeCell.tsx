import { memo } from 'react';
import { CAUSES_INCIDENCE_TYPE_ENUM } from '../../interfaces';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';

type CausesIncidenceTypeCellProps = {
  value: CAUSES_INCIDENCE_TYPE_ENUM;
};

const CausesIncidenceTypeCell = ({ value }: CausesIncidenceTypeCellProps) => {
  const { t } = useTranslation('causesIncidence');

  return <Chip label={t(`cause.${value}`)} />;
};

export default memo(CausesIncidenceTypeCell);
