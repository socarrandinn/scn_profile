import React, { memo } from 'react';
import { ADVERTISEMENTS_TYPES } from 'modules/rrhh/advertisement/constants/advertisement-types.constant';
import { styled } from '@mui/material/styles';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { AdvertisementColorConstants } from 'modules/rrhh/advertisement/constants/advertisement-color.constants';

interface TypeCellProps {
  type: ADVERTISEMENTS_TYPES;
}

const TypeStyled = styled(FlexBox)(({ bg }: { bg: string }) => ({
  backgroundColor: bg,
  color: '#fff',
  maxWidth: '7rem',
}));
const TypeCell = ({ type }: TypeCellProps) => {
  const { t } = useTranslation('advertisement');

  return (
    <TypeStyled
      bg={AdvertisementColorConstants[type]}
      p={1}
      alignItems='center'
      justifyContent='center'
      sx={{ borderRadius: '4px' }}
    >
      {t(`types.${type}`)}
    </TypeStyled>
  );
};

export default memo(TypeCell);
