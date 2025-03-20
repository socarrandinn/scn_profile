import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import { FormTextField } from '@dfl/mui-react-common';

const UserBasicForm = () => {
  const { t } = useTranslation('users');

  return (
    <>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          autoFocus
          required
          name='firstName'
          label={t('common:firstName')}
          placeholder={t('common:firstName')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          name='lastName'
          required
          label={t('common:lastName')}
          placeholder={t('common:lastName')}
        />
      </Grid>
      <Grid item xs={12}>
        <FormTextField fullWidth name='email' required label={t('common:email')} placeholder='example@gmail.com' />
      </Grid>
    </>
  );
};

export default memo(UserBasicForm);
