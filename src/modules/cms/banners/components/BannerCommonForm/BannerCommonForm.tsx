import { memo } from 'react';
import { FormDatePickerField, FormSwitchField, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid, InputAdornment, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LinkOutlined } from '@mui/icons-material';

type BannerCommonFormProps = {
  error?: any;
};
const BannerCommonForm = ({ error }: BannerCommonFormProps) => {
  const { t } = useTranslation('banner');

  return (
    <>
      {error && <HandlerError error={error} />}

      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <FormTextField name='title' label={t('fields.title')} />
        </Grid>
        <Grid item xs={12}>
          <FormTextField rows={2} multiline name='description' label={t('fields.description')} />
        </Grid>
        <Grid item xs={12}>
          <FormTextField name='position' label={t('fields.position')} />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormDatePickerField name='startDate' disablePast label={t('fields.startDate')} required />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormDatePickerField name='endDate' disablePast label={t('fields.endDate')} required />
        </Grid>
        <Grid item xs={12}>
          <Stack sx={{ mb: 2 }}>
            <Typography variant='subtitle2' lineHeight={1}>
              {t('fields.linkUrl.title')}
            </Typography>
            <Typography variant='caption'>{t('fields.linkUrl.subtitle')}</Typography>
          </Stack>
          <FormTextField
            name='linkUrl'
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
        <Grid item xs={12}>
          <FormSwitchField name='withText' label={t('fields.withText')} />
        </Grid>
      </Grid>
    </>
  );
};

export default memo(BannerCommonForm);
