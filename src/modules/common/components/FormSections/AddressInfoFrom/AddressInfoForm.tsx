import { Grid } from '@mui/material';
import { AddressInput } from 'modules/common/components/Address';
import { useTranslation } from 'react-i18next';
import { FormPaper } from 'modules/common/components/FormPaper';

type AddressInfoProps = {
  name?: string;
  required?: boolean;
  hideZip?: boolean;
};
const AddressInfoForm = ({ name = 'address', required = true, hideZip }: AddressInfoProps) => {
  const { t } = useTranslation('common');
  return (
        <FormPaper title={t('address')}>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12}>
                    <AddressInput name={name} required={required} hideZip={hideZip}/>
                </Grid>
            </Grid>
        </FormPaper>
  );
};

export default AddressInfoForm;
