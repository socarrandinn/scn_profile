import { memo } from 'react';
import { CAUSES_INCIDENCE_TYPE_ENUM } from '../../interfaces';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';

type CausesIncidenceTypeCellProps = {
  type: CAUSES_INCIDENCE_TYPE_ENUM;
};

const CausesIncidenceTypeCell = ({ type }: CausesIncidenceTypeCellProps) => {
  const { t } = useTranslation('causesIncidence');
  return <Chip label={t(`cause.${type}`)} />;
};

export default memo(CausesIncidenceTypeCell);
