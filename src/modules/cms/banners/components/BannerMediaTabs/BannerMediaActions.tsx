import { Button, Stack } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useBannerContext } from '../../context/useBannerContext';
import BannerToggle from '../BannerToggle/BannerToggle';

type Props = {
  onClose: VoidFunction;
};

const BannerMediaAction = ({ onClose }: Props) => {
  const { t } = useTranslation();
  const { setView, view } = useBannerContext();

  const onChange = (e: any) => {
    if (e.target.value !== null) {
      const value = e.target.value;
      setView(value);
    }
  };
  return (
    <Stack gap={1} flexDirection={'row'} sx={{ py: 1, justifyContent: 'flex-end', ml: 'auto' }}>
      <BannerToggle view={view} onChange={onChange} />
      <Button onClick={onClose} variant='grey'>
        {t('common:cancel')}
      </Button>
      {/* <LoadingButton variant='contained'>{t('common:save')}</LoadingButton> */}
    </Stack>
  );
};

export default memo(BannerMediaAction);
