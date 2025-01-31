import { memo } from 'react';
import usePositionBannerForm from '../hooks/collection/usePositionBannerForm';
import { Form } from '@dfl/mui-react-common';
import MultiBannerOptions from '../components/fields/FormBannerRadioField/options/MultiBannerOptions';
import { Controller } from 'react-hook-form';
import { RadioGroup } from '@mui/material';

const CollectionBannerMultipleContainer = () => {
  const { control, onSubmit } = usePositionBannerForm();

  return (
    <Form onSubmit={onSubmit} control={control} isLoading={false} size={'small'} id={'form'} dark>
      <Controller
        name='position'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <RadioGroup {...field}>
            <MultiBannerOptions filed={field} />
          </RadioGroup>
        )}
      />
    </Form>
  );
};

export default memo(CollectionBannerMultipleContainer);
