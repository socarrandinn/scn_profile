import { FormEventHandler, memo } from 'react';
import { Form, FormCheckBoxField, HandlerError } from '@dfl/mui-react-common';
import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import { PROVINCES } from '@dfl/location';

type DeliveryCreateDestinationFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  setValue: any;
  onSubmit: FormEventHandler | undefined;
};

const DeliveryCreateDestinationForm = ({
  error,
  control,
  isLoading,
  onSubmit,
  setValue,
}: DeliveryCreateDestinationFormProps) => {
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(event) => {
                    PROVINCES.forEach(({ state }) => setValue(state, event.target.checked));
                  }}
                  defaultChecked={false}
                />
              }
              label={'Toda Cuba'}
            />
          </Grid>
          {!isLoading &&
            PROVINCES.map((province) => (
              <Grid item xs={12} md={6} key={province.state}>
                <FormCheckBoxField name={province.state} label={province.name} />
              </Grid>
            ))}
        </Grid>
      </Form>
    </div>
  );
};

export default memo(DeliveryCreateDestinationForm);
