import React, { FC, memo } from 'react';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import { Grid, Typography } from '@mui/material';
import { FlexBox, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

interface INotification {
  url: string;
  name: string;
  title: string;
  bodyMenssager: string;
}

const ImportantNotification: FC<INotification> = ({ url, name, title, bodyMenssager }) => {
  const { t } = useTranslation('dashboard');
  return (
    <PaperTabView
      firsts
      sx={{ backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'top', minHeight: 180 }}
    >
      <Grid container wrap="nowrap" spacing={1}>
        <Grid item xs={8} sx={{ fontFamily: 'fantasy', color: '#553089' }}>
          <Typography variant='h5' component='div' style={{ marginBottom: 3, fontWeight: 600, }}>
            {name}
          </Typography>
          <Typography variant='h2' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' component='div' style={{ marginTop: 12 }}>
            {bodyMenssager}
          </Typography>

          <FlexBox alignItems='center' justifyContent='flex-start' pt={2}>
          <LoadingButton variant='text' endIcon={<DownloadDoneIcon />} >
            {t('advertising.gotIt')}
          </LoadingButton>
        </FlexBox>
        </Grid>
      </Grid>
    </PaperTabView>
  );
};

export default memo(ImportantNotification);
