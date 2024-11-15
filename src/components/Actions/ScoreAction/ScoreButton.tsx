import { memo } from 'react';
import { LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import ScoreAction from './ScoreAction';
import { ScoreOutlined } from '@mui/icons-material';

type ScoreActionProps = {
  isLoading: boolean;
  onChange: any;
  reset?: any;
};

const ScoreButton = ({ isLoading, onChange, reset }: ScoreActionProps) => {
  const { t } = useTranslation('common');
  const { isOpen, onClose, onOpen } = useToggle();

  const handleClose = () => {
    onClose?.();
    reset?.();
  };

  return (
    <>
      <LoadingButton variant={'outlined'} startIcon={<ScoreOutlined />} loading={isLoading} onClick={onOpen}>
        {t('scoreMany')}
      </LoadingButton>
      <ScoreAction
        open={isOpen}
        onClose={handleClose}
        onChange={onChange}
        isLoading={isLoading}
        title={'common:scoreConfirmation'}
      />
    </>
  );
};

export default memo(ScoreButton);
