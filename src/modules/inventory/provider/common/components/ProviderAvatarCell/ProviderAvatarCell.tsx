import { IImageMedia } from 'modules/common/interfaces';
import React, { useMemo } from 'react';
import { LogisticProvider } from 'modules/inventory/provider/common/constants';
import { AvatarMedia } from 'components/AvatarMedia';
import NoFoodIcon from '@mui/icons-material/NoFood';
import { Badge } from '@mui/material';
import { LOGISTIC } from 'modules/inventory/constants/entities.style';

type ProviderAvatarCellProps = {
  image?: IImageMedia;
  type?: string;
  variant?: 'circular' | 'rounded' | 'square';
  name: string;
};

const ProviderAvatarCell = ({ image, type, variant, name }: ProviderAvatarCellProps) => {
  const isLogistic = useMemo(() => type === LogisticProvider, [type]);

  return (
    <Badge badgeContent={isLogistic ? ' ' : null} sx={{ '& .MuiBadge-badge': { backgroundColor: LOGISTIC.COLOR } }}>
      <AvatarMedia name={name} avatar={image} variant={variant}>
        <NoFoodIcon fontSize='small' />
      </AvatarMedia>
    </Badge>
  );
};

export default ProviderAvatarCell;
