import React, { memo, useMemo, lazy, Suspense } from 'react';
import { isNumber } from 'lodash';
import { IconButton, CircularProgress } from '@mui/material';

interface FontIconViewProps {
  shape?: 'circle' | 'square';
  size?: 'small' | 'medium' | 'large' | number;
  bgColor?: string;
  color?: 'primary' | 'error' | 'secondary' | 'info' | 'success' | 'warning' | string;
  value?: string;
}

const FontIconView = ({ value, size, color, shape, bgColor }: FontIconViewProps) => {
  const IconComponent = lazy(() => import(`@mui/icons-material/${value || 'AutoFixHighIcon'}`));

  const getSize = useMemo(() => {
    if (size === 'large') return 92;
    if (size === 'medium') return 48;
    if (size === 'small') return 32;
    if (isNumber(size)) return size;
    return 48;
  }, [size]);

  const getIconSize = useMemo(() => {
    if (size === 'large') return 64;
    if (size === 'medium') return 32;
    if (size === 'small') return 24;
    if (isNumber(size)) return size ? size - 12 : 32;
    return size ? size - 12 : 32;
  }, [size]);

  return (
    <Suspense fallback={<CircularProgress />}>
      <IconButton
        aria-label='delete'
        sx={{
          borderRadius: shape === 'square' ? 0 : '50%',
          height: getSize,
          width: getSize,
          background: bgColor || '#eee',
        }}
      >
        <IconComponent
          fontSize='inherit'
          sx={{
            fontSize: getIconSize,
            width: getIconSize,
            height: getIconSize,
            background: bgColor || '#eee',
          }}
        />
      </IconButton>
    </Suspense>
  );
};

export default memo(FontIconView);
