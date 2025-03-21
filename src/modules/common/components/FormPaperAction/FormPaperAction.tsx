import { memo } from 'react';
import { ChildrenProps, IconButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { PermissionCheck } from '@dfl/react-security';
import { Edit } from '@mui/icons-material';

type Props = ChildrenProps & {
  open: boolean;
  onToggle: () => void;
  permissions?: string | string[];
};

const FormPaperAction = ({ onToggle, open, permissions }: Props) => {
  const { t } = useTranslation('common');

  return (
    <PermissionCheck permissions={permissions as string}>
      {open ? (
        <Button color='primary' onClick={onToggle}>
          {t('common:close')}
        </Button>
      ) : (
        <IconButton color='primary' tooltip={t('common:updateInfo')} onClick={onToggle}>
          <Edit sx={{ fontSize: '17.586px' }} />
        </IconButton>
      )}
    </PermissionCheck>
  );
};

export default memo(FormPaperAction);
