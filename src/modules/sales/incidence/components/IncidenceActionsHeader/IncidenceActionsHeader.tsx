/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import React, { memo } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PaperContent } from 'modules/inventory/common/components/StoreBoxs/common';
import { FlexBox } from '@dfl/mui-react-common';
import ErrorNote from 'modules/common/components/ErrorNote/ErrorNote';

type Props = {
  incidenceId: string;
  title: string;
  action?: () => void;
};

const IncidenceActionsHeader = ({ title, action }: Props) => {
  const { t } = useTranslation('incidence');

  return (
    <PaperContent sx={{ mt: 2, borderRadius: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <FlexBox flexDirection='column'>
            <Typography variant='h1' fontSize='24px !important'>
              {title}
            </Typography>
            <FlexBox gap={0.5} sx={{ color: '#9499A1' }}>
              <Typography className='text-primary underline' fontSize={16} fontWeight={500}>
                ORD023233653689
              </Typography>
              <Typography fontSize={21} lineHeight='22px'>
                /
              </Typography>
              <Typography className='text-primary underline' fontSize={16} fontWeight={500}>
                ORD023233653689
              </Typography>
              <Typography fontSize={21} lineHeight='22px'>
                /
              </Typography>
              <Typography className='text-[#F94A44]' fontSize={16} fontWeight={500}>
                INC15236236
              </Typography>
            </FlexBox>
            <FlexBox className='text-lg font-bold'>
              <ErrorNote message='El cliente reporta haber recibido una pasta de bocadito en mal estado' />
            </FlexBox>
          </FlexBox>
        </Grid>

        <Grid item xs={3}>
          <FlexBox gap={1} height='100%' alignItems={'flex-end'} justifyContent={'flex-end'}>
            <Button variant='grey'>{t('common:cancel')}</Button>
            <Button variant='contained' onClick={action}>
              {t('apply')}
            </Button>
          </FlexBox>
        </Grid>
      </Grid>
    </PaperContent>
  );
};

export default memo(IncidenceActionsHeader);
