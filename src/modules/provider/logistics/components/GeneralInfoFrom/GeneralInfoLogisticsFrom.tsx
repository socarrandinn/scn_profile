import { Grid } from '@mui/material';
import { FormUploadImage } from 'modules/common/components/UploadImage';
import FactoryIcon from '@mui/icons-material/Factory';
import { FormTextField } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const GeneralInfoLogisticsFrom = () => {
  const { t } = useTranslation('logistics');
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {/* <AvatarUser height={80} width={80} user={control.avatar} /> */}
      <Grid item xs={12} justifyContent='center' display='flex'>
      <FormUploadImage name={'avatar'} size={100}>
        <FactoryIcon/>
      </FormUploadImage>
      </Grid>
      <Grid item xs={12}>
        <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
      </Grid>
  <Grid item xs={12}>
    <FormTextField fullWidth autoFocus required name='code' label={t('fields.code')} />
  </Grid>
    </Grid>
  )
}

export default memo(GeneralInfoLogisticsFrom)
