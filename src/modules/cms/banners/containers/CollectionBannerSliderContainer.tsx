import { memo } from 'react';
import usePositionBannerForm from '../hooks/collection/usePositionBannerForm';
import { Form } from '@dfl/mui-react-common';
import { Controller } from 'react-hook-form';
import { RadioGroup } from '@mui/material';
import SliderBannerOptions from '../components/fields/FormBannerRadioField/options/SliderBannerOptions/SliderBannerOptions';

const CollectionBannerSliderContainer = () => {
  const { control, onSubmit } = usePositionBannerForm();

  return (
    <Form onSubmit={onSubmit} control={control} isLoading={false} size={'small'} id={'form'} dark>
      <Controller
        name='position'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <RadioGroup {...field}>
            <SliderBannerOptions filed={field} options={['slider_banner_1', 'slider_banner_2']} />
          </RadioGroup>
        )}
      />
    </Form>
  );
};

export default memo(CollectionBannerSliderContainer);
