import { memo } from 'react';
import usePositionBannerForm from '../hooks/collection/usePositionBannerForm';
import { Form } from '@dfl/mui-react-common';
import { Controller } from 'react-hook-form';
import { RadioGroup } from '@mui/material';
import SimpleBannerOptions from '../components/fields/FormBannerRadioField/options/SimpleBannerOptions';

const CollectionBannerSimpleContainer = () => {
  const { control, onSubmit } = usePositionBannerForm();

  return (
    <Form onSubmit={onSubmit} control={control} isLoading={false} size={'small'} id={'form'} dark>
      <Controller
        name='position'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <RadioGroup {...field}>
            <SimpleBannerOptions filed={field} />
          </RadioGroup>
        )}
      />
    </Form>
  );
};

export default memo(CollectionBannerSimpleContainer);
