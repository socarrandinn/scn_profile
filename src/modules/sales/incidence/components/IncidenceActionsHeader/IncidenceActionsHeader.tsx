/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import React, { memo } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import ErrorNote from 'modules/common/components/ErrorNote/ErrorNote';

type Props = ChildrenProps & {
  orderCode?: string;
  title: string;
  action?: () => void;
  code?: string;
  message?: string;
  incidenceTitle?: string;
  noActions?: boolean;
};

const IncidenceActionsHeader = ({ title, noActions, message, code, incidenceTitle, orderCode, children, action }: Props) => {
  const { t } = useTranslation('incidence');

  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <FlexBox flexDirection='column'>
          <Typography variant='h1'>
            {title}
          </Typography>
          {children}
          <FlexBox gap={0.5} sx={{ color: '#9499A1' }}>
            <Typography className='text-primary underline' fontSize={16} fontWeight={500}>
              {orderCode || 'ORD023233653689'}
            </Typography>
            <Typography fontSize={21} lineHeight='22px'>
              /
            </Typography>
            <Typography className='text-primary underline' fontSize={16} fontWeight={500}>
              {orderCode || 'ORD023233653689'}
            </Typography>
            <Typography fontSize={21} lineHeight='22px'>
              /
            </Typography>
            <Typography className='text-[#F94A44]' fontSize={16} fontWeight={500}>
              {code || 'INC15236236'}
            </Typography>
          </FlexBox>
          <FlexBox className='text-lg font-bold'>
            <ErrorNote message={message || 'El cliente reporta haber recibido una pasta de bocadito en mal estado'} title={incidenceTitle} />
          </FlexBox>
        </FlexBox>
      </Grid>

      {!noActions &&
        <Grid item xs={3}>
          <FlexBox gap={1} height='100%' alignItems={'flex-end'} justifyContent={'flex-end'}>
            <Button variant='grey'>{t('common:cancel')}</Button>
            <Button variant='contained' onClick={action}>
              {t('apply')}
            </Button>
          </FlexBox>
        </Grid>
      }
    </Grid>
  );
};

export default memo(IncidenceActionsHeader);
