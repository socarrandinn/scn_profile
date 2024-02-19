import { IImageMedia } from 'modules/common/interfaces';
import React, { useMemo } from 'react';
import { LogisticProvider } from 'modules/inventory/provider/common/constants';
import { AvatarMedia } from 'components/AvatarMedia';
import NoFoodIcon from '@mui/icons-material/NoFood';
import { Box } from '@mui/material';
import { LOGISTIC } from 'modules/inventory/constants/entities.style';
import IconBox from './IconBox';

type ProviderAvatarCellProps = {
  image?: IImageMedia;
  type?: string;
  variant?: 'circular' | 'rounded' | 'square';
  name: string;
};

const ProviderAvatarCell = ({ image, type, variant, name }: ProviderAvatarCellProps) => {
  const isLogistic = useMemo(() => type === LogisticProvider, [type]);

  return (
    <Box position={'relative'}>
      <AvatarMedia name={name} avatar={image} variant={variant}>
        <NoFoodIcon fontSize='small' />
      </AvatarMedia>
      {isLogistic && <IconBox icon={LOGISTIC.ICON} />}
    </Box>
  );
};

export default ProviderAvatarCell;
