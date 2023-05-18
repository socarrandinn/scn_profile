import React, { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { ADVERTISEMENTS_AUDIENCE } from 'modules/rrhh/advertisement/constants/advertisement-audience.constant';

interface AudienceCellProps {
  audience: ADVERTISEMENTS_AUDIENCE;
}

const AudienceCell = ({ audience }: AudienceCellProps) => {
  const { t } = useTranslation('advertisement');

  return (
    <FlexBox alignItems='center' justifyContent='flex-start'>
      {t(`audiences.${ADVERTISEMENTS_AUDIENCE?.[audience]}`)}
    </FlexBox>
  );
};

export default memo(AudienceCell);
