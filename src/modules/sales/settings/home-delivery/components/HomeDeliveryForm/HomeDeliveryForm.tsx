import { FormEventHandler, memo } from 'react';
import { Form, FormCheckBoxField, HandlerError } from '@dfl/mui-react-common';
import { Checkbox, FormControlLabel, Stack } from '@mui/material';
import { PROVINCES } from '@dfl/location';

type HomeDeliveryFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  setValue: any;
  onSubmit: FormEventHandler | undefined;
};

const HomeDeliveryForm = ({ error, control, isLoading, onSubmit, setValue }: HomeDeliveryFormProps) => {
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Stack direction={'column'}>
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
          {!isLoading &&
            PROVINCES.map((province) => (
              <FormCheckBoxField key={province.state} name={province.state} label={province.name} />
            ))}
        </Stack>
      </Form>
    </div>
  );
};

export default memo(HomeDeliveryForm);
