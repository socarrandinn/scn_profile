import { CheckBoxField, LongText } from '@dfl/mui-react-common';
import { Edit } from '@mui/icons-material';
import { Box, Button, Divider, Typography } from '@mui/material';
import { memo, ReactNode, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

export type PaymentMethodHeaderProps = {
  title: any;
  icon: ReactNode;
  field?: string;
};

const boxStyle = {
  borderRadius: '10px',
  display: 'flex',
  alignItems: { xs: 'baseline', md: 'center' },
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'space-between',
};

const PaymentMethodCardHeader = ({ title, icon, field }: PaymentMethodHeaderProps) => {
  const { t } = useTranslation('riskLimit');
  const navigate = useNavigate();

  const onClickEdit = useCallback(() => {
    navigate(`?edit=${field}`);
  }, [navigate, field]);

  return (
    <div>
      <Box sx={boxStyle}>
        <div className='flex items-center gap-1'>
          <CheckBoxField sx={{ mr: 0 }} />
          {icon}
        </div>
        <Button
          variant='contained'
          color='success'
          sx={{ borderRadius: '25px', p: '8px 7px 7px 7px', minWidth: '32px' }}
          onClick={onClickEdit}
        >
          <Edit sx={{ textAlign: 'center' }} />
        </Button>
      </Box>
      <LongText lineClamp={1} text={t(title)} variant='h3' />
      <Divider sx={{ my: 2 }} />
    </div>
  );
};

export default memo(PaymentMethodCardHeader);
