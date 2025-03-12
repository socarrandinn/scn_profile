import { memo, ReactNode } from 'react';
import { CustomTooltip } from './styled';
import { ErrorOutlineOutlined, Info } from '@mui/icons-material';
import { tooltipClasses } from '@mui/material';
import { useTranslation } from 'react-i18next';

type Props = {
  note?: string;
  info?: boolean;
};

const TooltipError = ({ note, info = false }: Props) => {
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
      {info ? <Info fontSize='small' color='success' /> : <ErrorOutlineOutlined fontSize='small' color='error' />}
    </CustomTooltip>
  );
};

export default memo(TooltipError);
