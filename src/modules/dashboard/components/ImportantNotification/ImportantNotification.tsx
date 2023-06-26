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
            sx={{
              backgroundImage: `url(${url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              minHeight: 180,
              mt: 0
            }}
        >
            <Grid container wrap="nowrap" spacing={1}>
                <Grid item xs={8}>
                    <Typography sx={{ fontWeight: 600, fontSize: 40 }} color={'primary'}>
                        {name}
                    </Typography>
                    <Typography sx={{ fontWeight: 600 }} mb={3}>
                        {title}
                    </Typography>
                    <Typography>
                        {bodyMenssager}
                    </Typography>

                    <FlexBox alignItems='center' justifyContent='flex-start' pt={2}>
                        <LoadingButton variant='text' endIcon={<DownloadDoneIcon/>} sx={{ pl: 0 }}>
                            {t('advertising.gotIt')}
                        </LoadingButton>
                    </FlexBox>
                </Grid>
            </Grid>
        </PaperTabView>
  );
};

export default memo(ImportantNotification);
