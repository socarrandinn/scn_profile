import { IconButton, LoadingButton } from '@dfl/mui-react-common';
import { Refresh } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  queryKey: string[][];
  variant?: 'outlined' | 'outlined';
  type?: 'button' | 'iconButton';
  size?: 'small' | 'medium';
};

const ButtonRefresh = ({ queryKey, variant = 'outlined', type = 'button', size = 'medium' }: Props) => {
  const { t } = useTranslation('common');
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const handleRefresh = useCallback(() => {
    setLoading(true);
    queryKey.forEach((key) => queryClient.invalidateQueries(key));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [queryClient, queryKey]);

  switch (type) {
    case 'button': {
      return (
        <LoadingButton size={size} onClick={handleRefresh} loading={loading} variant={variant} startIcon={<Refresh />}>
          {t('refresh')}
        </LoadingButton>
      );
    }
    case 'iconButton': {
      return (
        <>
          <IconButton size={size} tooltip={t('refresh')} onClick={handleRefresh} disabled={loading}>
            {loading ? <CircularProgress size={16} /> : <Refresh />}
          </IconButton>
        </>
      );
    }
    default: {
      return null;
    }
  }
};

export default memo(ButtonRefresh);
