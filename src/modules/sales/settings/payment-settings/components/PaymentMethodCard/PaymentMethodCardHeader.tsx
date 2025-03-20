import { FlexBox, IconButton, LongText } from '@dfl/mui-react-common';
import { EditOutlined } from '@mui/icons-material';
import { Box, Button, Divider, useTheme } from '@mui/material';
import { memo, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { PaymentMethodActiveCheckbox } from '../PaymentMethodActiveCheckbox';

export type PaymentMethodHeaderProps = {
  title: any;
  icon: ReactNode;
  field: string;
  enabled: boolean;
};

const boxStyle = {
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'space-between',
};

const PaymentMethodCardHeader = ({ title, icon, field, enabled }: PaymentMethodHeaderProps) => {
  const { t } = useTranslation('common');
  const theme = useTheme();
  const navigate = useNavigate();

  const onClickEdit = useCallback(() => {
    navigate(`?edit=${field}`);
  }, [navigate, field]);

  const onClickHistory = useCallback(() => {
    navigate(`?method=${field}`);
  }, [navigate, field]);

  return (
    <div>
      <Box sx={boxStyle}>
        <FlexBox alignItems={'center'} sx={{ '.MuiFormControlLabel-root': { marginRight: '0px !important' } }}>
          <PaymentMethodActiveCheckbox id={field} value={enabled} />
          {icon}
        </FlexBox>
        <FlexBox alignItems={'center'} gap={2}>
          <Button
            disabled={!enabled}
            sx={{ textDecoration: 'underline', '&:hover': { textDecoration: 'underline' } }}
            onClick={onClickHistory}
          >
            {t('seeHistory')}
          </Button>
          <IconButton
            tooltip={t('edit')}
            color='success'
            disabled={!enabled}
            sx={{
              width: '32px',
              height: '32px',
              background: theme.palette.success.main,
              '&:hover': { background: theme.palette.primary.main },
              '&.Mui-disabled': { background: theme.palette.success.main, '& > svg': { color: 'white' } },
            }}
            onClick={onClickEdit}
          >
            <EditOutlined sx={{ textAlign: 'center', color: 'white' }} fontSize='small' />
          </IconButton>
        </FlexBox>
      </Box>
      <LongText lineClamp={1} text={t(title)} variant='h3' />
      <Divider sx={{ my: 2 }} />
    </div>
  );
};

export default memo(PaymentMethodCardHeader);
