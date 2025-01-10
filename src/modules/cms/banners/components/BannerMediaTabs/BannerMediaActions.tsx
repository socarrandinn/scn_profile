import { LoadingButton } from '@dfl/mui-react-common';
import { Button, Stack } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  onClose: VoidFunction;
};

const BannerMediaAction = ({ onClose }: Props) => {
  const { t } = useTranslation();
  return (
    <Stack gap={2}>
      <Button onClick={onClose} variant='grey'>
        {t('common:cancel')}
      </Button>
      <LoadingButton variant='contained'>{t('common:save')}</LoadingButton>
    </Stack>
  );
};

export default memo(BannerMediaAction);
