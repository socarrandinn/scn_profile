import { memo } from 'react';
import { CustomTooltip } from './styled';
import { ErrorOutlineOutlined } from '@mui/icons-material';
import { tooltipClasses } from '@mui/material';
import { useTranslation } from 'react-i18next';

const TooltipError = ({ note }: { note?: string }) => {
  const { t } = useTranslation('product');
  return (
    <CustomTooltip
      title={t(note || 'errors.percentGlobal')}
      sx={{
        [`& .${tooltipClasses.tooltip}`]: {
          padding: 1,
          borderRadius: 1,
          minWidth: '100%',
          fontWeight: 400,
        },
      }}
    >
      <ErrorOutlineOutlined fontSize='small' color='error' />
    </CustomTooltip>
  );
};

export default memo(TooltipError);
