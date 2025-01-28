import { LoadingButton } from '@dfl/mui-react-common';
import { Refresh } from '@mui/icons-material';
import { useQueryClient } from '@tanstack/react-query';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  queryKey: string[][];
  variant?: 'outlined' | 'outlined';
};

const ButtonRefresh = ({ queryKey, variant = 'outlined' }: Props) => {
  const { t } = useTranslation('common');
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const handleRefresh = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      queryKey.forEach((key) => queryClient.invalidateQueries(key));
    }, 1000);
  }, [queryClient, queryKey]);

  return (
    <LoadingButton startIcon={<Refresh />} loading={loading} onClick={handleRefresh} variant={variant ?? 'outlined'}>
      {t('refresh')}
    </LoadingButton>
  );
};

export default memo(ButtonRefresh);
