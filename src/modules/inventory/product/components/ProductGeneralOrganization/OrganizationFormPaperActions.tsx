import { memo } from 'react';
import { ChildrenProps, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Box, Typography } from '@mui/material';

type Props = ChildrenProps & {
  open: boolean;
  onToggle: () => void;
  label: string;
};

const OrganizationFormPaperActions = ({ label, onToggle, open }: Props) => {
  const { t } = useTranslation('common');

  return (
    <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
      <Typography><b>{label}</b></Typography>
      <LoadingButton onClick={onToggle}>
        {open ? t('common:close') : <BorderColorOutlinedIcon sx={{ fontSize: '17px' }} />}
      </LoadingButton>
    </Box>
  );
};

export default memo(OrganizationFormPaperActions);
