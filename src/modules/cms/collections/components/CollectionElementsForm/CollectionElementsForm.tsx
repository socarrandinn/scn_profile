import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { BannerSelect } from 'modules/cms/banners/components/BannerSelect';

type CollectionElementsFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const CollectionElementsForm = ({ error, control, isLoading, onSubmit }: CollectionElementsFormProps) => {
  const { t } = useTranslation('collection');

  return (
    <div>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'small'}
        id={'collection-elements-banner-form'}
        dark
      >
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <BannerSelect name='elements' label={t('banner:list')} multiple />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(CollectionElementsForm);
