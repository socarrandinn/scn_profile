import { memo } from 'react';
import { ChildrenProps, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Box, Tooltip, Typography } from '@mui/material';

type Props = ChildrenProps & {
  open: boolean;
  onToggle: () => void;
  label: string;
};

const ProvidersFormPaperActions = ({ label, onToggle, open }: Props) => {
  const { t } = useTranslation('common');

  return (
    <Box display={'flex'} justifyContent={'space-between'} alignContent={'center'} width={'100%'}>
      <Box>
        <Typography marginTop={'6px'} fontWeight={500} fontSize={14}>{label}</Typography>
      </Box>
      <Box>
        <LoadingButton onClick={onToggle}>
          {open ? t('common:close') : <Tooltip title={t('common:updateInfo')}><BorderColorOutlinedIcon sx={{ fontSize: '17px' }} /></Tooltip>}
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default memo(ProvidersFormPaperActions);
