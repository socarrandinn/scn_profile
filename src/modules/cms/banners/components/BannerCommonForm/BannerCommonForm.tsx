import { memo } from 'react';
import { FormDatePickerField, FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

type Props = {
  name?: string;
};
const BannerCommonForm = ({ name }: Props) => {
  const { t } = useTranslation('banner');

  const getFieldName = (path: string) => {
    if (name) {
      return `${name}.${path}`;
    }

    return path;
  };

  return (
    <>
      <Grid item xs={12}>
        <FormTextField name={getFieldName('title')} required label={t('fields.title')} />
      </Grid>
      {/* <Grid item xs={12}>
      <FormTextField rows={2} required multiline name='description' label={t('fields.description')} />
    </Grid> */}
      {/*  <Grid item xs={12}>
        <FormTextField name='position' required label={t('fields.position')} />
      </Grid> */}
      <Grid item xs={12} md={6}>
        <FormDatePickerField name={getFieldName('startDate')} disablePast label={t('fields.startDate')} required />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDatePickerField name={getFieldName('endDate')} disablePast label={t('fields.endDate')} required />
      </Grid>
      {/*  <Grid item xs={12}>
        <Stack sx={{ mb: 1 }}>
          <Typography variant='subtitle2' lineHeight={1}>
            {t('fields.linkUrl.title')}
          </Typography>
          <Typography variant='caption'>{t('fields.linkUrl.subtitle')}</Typography>
        </Stack>
       <FormTextField
          name={getFieldName('linkUrl')}
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
      <Grid item xs={12}>
      <FormSwitchField name='withText' label={t('fields.withText')} />
    </Grid> */}
    </>
  );
};

export default memo(BannerCommonForm);
