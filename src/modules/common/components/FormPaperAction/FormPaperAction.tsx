import { memo } from 'react';
import { ChildrenProps, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { BorderColorOutlined } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

type Props = ChildrenProps & {
  open: boolean;
  onToggle: () => void;
};

const FormPaperAction = ({ onToggle, open }: Props) => {
  const { t } = useTranslation('common');

  return (
    <LoadingButton onClick={onToggle}>
      {open ? t('common:close') : <Tooltip title={t('common:updateInfo')}><BorderColorOutlined sx={{ fontSize: '17px' }} /></Tooltip>}
    </LoadingButton>)
};

export default memo(FormPaperAction);
