import { FormHelperText, Grid } from '@mui/material';
import { FormTextField } from '@dfl/mui-react-common';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormPaper } from 'modules/common/components/FormPaper';

type CommissionFormProps = {
  helperText?: string,
  name?: string,
}

const CommissionForm = ({ helperText, name = 'commission' }: CommissionFormProps) => {
  const { t } = useTranslation('provider');
  return (
        <FormPaper title={t('section.commission.title')}>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12}>
                    <FormTextField type='number' fullWidth autoFocus required name={name}
                                   label={t('fields.commission')} inputProps={{
                                     inputMode: 'numeric',
                                     step: 0.1
                                   }}/>

                    {helperText ? <FormHelperText>{helperText}</FormHelperText> : <></>}
                </Grid>
            </Grid>
        </FormPaper>)
}

export default memo(CommissionForm)
