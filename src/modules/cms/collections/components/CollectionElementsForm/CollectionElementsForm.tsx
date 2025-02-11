import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { BannerSelect } from 'modules/cms/banners/components/BannerSelect';
import { COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';
import { FormSelectElements } from '../Fields/FormSelectElements';
import { COLLECTION_ERRORS } from '../../constants/collection-errors';

type CollectionElementsFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  contentType: COLLECTION_CONTENT_TYPE;
};

const component = {
  [COLLECTION_CONTENT_TYPE.BANNER]: BannerSelect,
  [COLLECTION_CONTENT_TYPE.PRODUCT]: FormSelectElements,
  [COLLECTION_CONTENT_TYPE.CATEGORY]: FormSelectElements,
  [COLLECTION_CONTENT_TYPE.TESTIMONY]: FormSelectElements,
};
const title = {
  [COLLECTION_CONTENT_TYPE.BANNER]: 'banner:list',
  [COLLECTION_CONTENT_TYPE.PRODUCT]: 'product:list',
  [COLLECTION_CONTENT_TYPE.CATEGORY]: 'category:list',
  [COLLECTION_CONTENT_TYPE.TESTIMONY]: 'testimony:list',
};

const CollectionElementsForm = ({ error, control, isLoading, onSubmit, contentType }: CollectionElementsFormProps) => {
  const { t } = useTranslation('collection');

  const FormSelect = component[contentType];

  return (
    <div>
      <HandlerError error={error} errors={COLLECTION_ERRORS} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'small'}
        id={'collection-elements-form'}
        dark
      >
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormSelect
              name='elements'
              label={t(title[contentType])}
              multiple
              contentType={contentType}
              placeholder={t(`elements.${contentType}.title`)}
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(CollectionElementsForm);
