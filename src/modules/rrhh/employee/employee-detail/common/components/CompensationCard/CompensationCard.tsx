import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import SubSectionTitle from 'modules/common/components/Titles/SubSectionTitle';
import { Box } from '@mui/material';
import { ICompensation } from 'modules/rrhh/employee/common/interfaces';
import { ListItemDetails } from 'modules/common/components/ListItemDetails';

type Props = {
  value?: ICompensation | null;
};

const CompensationCard = ({ value }: Props) => {
  const { t } = useTranslation('employee');

  if (!value) {
    return <></>;
  }

  return (
    <Box>
      <SubSectionTitle>{t('section.compensation.title')}</SubSectionTitle>
      <ListItemDetails
        secondary={t('section.compensation.frequency.title')}
        primary={t(`section.compensation.frequency.${value.frequency}`)}
      />
      <ListItemDetails
        secondary={t('section.compensation.compensationType.title')}
        primary={t(`section.compensation.compensationType.${value.type}`)}
      />
      <ListItemDetails
        secondary={t('section.compensation.paymentType.title')}
        primary={t(`section.compensation.paymentType.${value.paymentType}`)}
      />
    </Box>
  );
};

export default memo(CompensationCard);
