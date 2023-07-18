import { FormEventHandler, memo } from 'react';
import { Form, FormSwitchField, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormUploadImage } from 'modules/common/components/UploadImage';
import FactoryIcon from '@mui/icons-material/Factory';
import AddressInfoForm from 'modules/common/components/AddressInfoFrom/AddressInfoForm';
import SelectCatergoy from 'modules/provider/logistics/components/SelectCategory/SelectCategory';
import { UseFormWatch } from 'react-hook-form';
import { ILogistics } from 'modules/provider/logistics/interfaces';
import ContactsInfoForm from 'modules/common/components/ContactInfoFrom/ContactsInfoForm';

type LogisticsFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  watch: UseFormWatch<ILogistics>;
  onSubmit: FormEventHandler | undefined;
};

const LogisticsForm = ({ error, control, isLoading, onSubmit, watch }: LogisticsFormProps) => {
  const { t } = useTranslation('logistics');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark watch={watch}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} justifyContent='center' display='flex'>
            {/* <AvatarUser height={80} width={80} user={control.avatar} /> */}
            <FormUploadImage name={'avatar'} size={100}>
              <FactoryIcon/>
            </FormUploadImage>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTextField fullWidth autoFocus required name='code' label={t('fields.code')} />
          </Grid>
            <Grid item xs md={6}>
              <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
            </Grid>
          <Grid item xs={12}>
            <AddressInfoForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTextField type='number' fullWidth autoFocus required name='commission' label={t('fields.commission')} inputProps={{
              inputMode: 'numeric',
              step: 0.1
            }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTextField type='number' fullWidth autoFocus required name='handlingCost' label={t('fields.handlingcost')} inputProps={{
              inputMode: 'numeric',
            }} />
          </Grid>
          <Grid item xs={12}>
            <ContactsInfoForm/>
          </Grid>
          <Grid item xs={12}>
            <SelectCatergoy name='categories' label={t('fields.category')} multiple={true}/>
          </Grid>
          <Grid item xs md={6}>
            <FormSwitchField name='active' label={t('fields.active')}/>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(LogisticsForm);
