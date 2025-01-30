import { memo } from 'react';
import { FormDatePickerField, FormTextField } from '@dfl/mui-react-common';
import { Grid, InputAdornment, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LinkOutlined } from '@mui/icons-material';

const BannerCommonForm = () => {
  const { t } = useTranslation('banner');

  return (
    <>
      <Grid item xs={12}>
        <FormTextField name='title' required label={t('fields.title')} />
      </Grid>
      {/* <Grid item xs={12}>
      <FormTextField rows={2} required multiline name='description' label={t('fields.description')} />
    </Grid> */}
      {/*  <Grid item xs={12}>
        <FormTextField name='position' required label={t('fields.position')} />
      </Grid> */}
      <Grid item xs={12} md={6}>
        <FormDatePickerField name='startDate' disablePast label={t('fields.startDate')} required />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDatePickerField name='endDate' disablePast label={t('fields.endDate')} required />
      </Grid>
      <Grid item xs={12}>
        <Stack sx={{ mb: 1 }}>
          <Typography variant='subtitle2' lineHeight={1}>
            {t('fields.linkUrl.title')}
          </Typography>
          <Typography variant='caption'>{t('fields.linkUrl.subtitle')}</Typography>
        </Stack>
        <FormTextField
          name='linkUrl'
          required
          label={t('fields.linkUrl.label')}
          placeholder={t('fields.linkUrl.placeholder')}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <LinkOutlined />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      {/* <Grid item xs={12}>
      <FormSwitchField name='withText' label={t('fields.withText')} />
    </Grid> */}
    </>
  );
};

export default memo(BannerCommonForm);
