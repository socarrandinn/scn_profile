import { memo } from 'react';
import { FormDatePickerField, FormSwitchField, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid, InputAdornment, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LinkOutlined } from '@mui/icons-material';

type CollectionBannerFormProps = {
  error?: any;
};
const CollectionBannerForm = ({ error }: CollectionBannerFormProps) => {
  const { t } = useTranslation('collection');

  return (
    <>
      <HandlerError error={error} />

      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <FormTextField name='title' label={t('banner.fields.title')} />
        </Grid>
        <Grid item xs={12}>
          <FormTextField name='position' label={t('banner.fields.position')} />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormDatePickerField name='startDate' disablePast label={t('banner.fields.startDate')} required />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormDatePickerField name='endDate' disablePast label={t('banner.fields.endDate')} required />
        </Grid>
        <Grid item xs={12}>
          <Stack sx={{ mb: 3 }}>
            <Typography variant='subtitle2' lineHeight={1}>
              {t('banner.fields.linkUrl.title')}
            </Typography>
            <Typography variant='caption'>{t('banner.fields.linkUrl.subtitle')}</Typography>
          </Stack>
          <FormTextField
            name='linkUrl'
            label={t('banner.fields.linkUrl.label')}
            placeholder={t('banner.fields.linkUrl.placeholder')}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LinkOutlined />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormSwitchField name='withText' label={t('banner.fields.withText')} />
        </Grid>
      </Grid>
    </>
  );
};

export default memo(CollectionBannerForm);
