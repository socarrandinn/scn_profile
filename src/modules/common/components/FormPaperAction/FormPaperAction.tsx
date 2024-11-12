import { memo } from 'react';
import { ChildrenProps, IconButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { BorderColorOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';

type Props = ChildrenProps & {
  open: boolean;
  onToggle: () => void;
};

const FormPaperAction = ({ onToggle, open }: Props) => {
  const { t } = useTranslation('common');

  if (open) {
    return (
      <Button color='primary' onClick={onToggle}>
        {t('common:close')}
      </Button>
    );
  }

  return (
    <IconButton color='primary' tooltip={t('common:updateInfo')} onClick={onToggle}>
      <BorderColorOutlined sx={{ fontSize: '17px' }} />
    </IconButton>
  );
};

export default memo(FormPaperAction);
