import { LoadingButton } from '@dfl/mui-react-common';
import { Button, Stack } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
type BannerFormActionProps = {
  isLoading: boolean;
};

const BannerFormAction = ({ isLoading }: BannerFormActionProps) => {
  const { t } = useTranslation();
  return (
    <Stack sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: 1, justifyContent: 'flex-end' }}>
      <Button variant='grey'>{t('common:cancel')}</Button>
      <LoadingButton variant='contained' loading={isLoading} type='submit' form='banner-form'>
        {t('common:save')}
      </LoadingButton>
    </Stack>
  );
};

export default memo(BannerFormAction);
