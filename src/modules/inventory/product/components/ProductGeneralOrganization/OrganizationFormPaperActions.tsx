import { memo } from 'react';
import { ChildrenProps, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Box } from '@mui/material';

type Props = ChildrenProps & {
  open: boolean;
  onToggle: () => void;
};

const OrganizationFormPaperActions = ({ onToggle, open }: Props) => {
  const { t } = useTranslation('common');

  return (
    <Box display={'flex'} justifyContent={'flex-end'} width={'100%'}>
      <LoadingButton onClick={onToggle}>
        {open ? t('common:close') : <BorderColorOutlinedIcon sx={{ fontSize: '18px' }} />}
      </LoadingButton>
    </Box>
  );
};

export default memo(OrganizationFormPaperActions);
