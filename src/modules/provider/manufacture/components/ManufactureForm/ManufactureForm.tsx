import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError, FormSwitchField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormUploadImage } from 'modules/common/components/UploadImage';

type ManufactureFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ManufactureForm = ({ error, control, isLoading, onSubmit }: ManufactureFormProps) => {
  const { t } = useTranslation('manufacture');

  return (
        <div>
            <HandlerError error={error}/>
            <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} justifyContent='center' display='flex'>
                        {/* <AvatarUser height={80} width={80} user={control.avatar} /> */}
                        <FormUploadImage name={'avatar'} size={100}/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')}/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormTextField fullWidth autoFocus required name='band' label={t('fields.band')}/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormSwitchField name='state' label={t('fields.state')} />
                    </Grid>
                </Grid>
            </Form>
        </div>
  );
};

export default memo(ManufactureForm);
