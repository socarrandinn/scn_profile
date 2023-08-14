import { Grid } from '@mui/material';
import { FormUploadImage } from 'modules/common/components/UploadImage';
import FactoryIcon from '@mui/icons-material/Factory';
import { ChildrenProps, FormTextField } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { FormMediaUploaderField } from 'modules/inventory/common/components/MediaUploader/FormMediaUploaderField';

const GeneralInfoFrom = ({ children }: ChildrenProps) => {
  const { t } = useTranslation('provider');
  return (
      <FormPaper nm title={t('section.general.title')}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {/* <AvatarUser height={80} width={80} user={control.avatar} /> */}
            <Grid item xs={12}>
                <FormMediaUploaderField name={'images'} />
                {/* <FormUploadImage name={'avatar'} size={100} variant={'square'}> */}
                {/*    <FactoryIcon/> */}
                {/* </FormUploadImage> */}
            </Grid>
            <Grid item xs={12}>
                <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')}/>
            </Grid>
            {children}
            {/* <Grid item xs={12}> */}
            {/*    <FormTextField fullWidth autoFocus required name='code' label={t('fields.code')}/> */}
            {/* </Grid> */}
        </Grid>
      </FormPaper>
  )
}

export default memo(GeneralInfoFrom)
