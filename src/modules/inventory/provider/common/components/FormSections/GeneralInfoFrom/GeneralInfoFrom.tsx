import { Grid } from '@mui/material';
import { ChildrenProps, FormTextField } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import {
  FormSingleMediaUploaderField
} from 'modules/common/components/MediaUploader/FormSingleMediaUploaderField';

const GeneralInfoFrom = ({ children }: ChildrenProps) => {
  const { t } = useTranslation('provider');
  return (
        <FormPaper nm title={t('section.general.title')}>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {/* <AvatarUser height={80} width={80} user={control.avatar} /> */}
                <Grid item xs={12}>
                    <FormSingleMediaUploaderField label={t('fields.image')} name={'image'}/>
                    {/* <FormUploadImage name={'image'} size={100} variant={'square'}> */}
                    {/*    <FlexBox flexDirection={'column'} alignItems={'center'} textAlign={'center'}> */}
                    {/*        <ArchiveIcon fontSize='small'/> */}
                    {/*        <Typography variant={'caption'}>Upload Image</Typography> */}
                    {/*    </FlexBox> */}
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
