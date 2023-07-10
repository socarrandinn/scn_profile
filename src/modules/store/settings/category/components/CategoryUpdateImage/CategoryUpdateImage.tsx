import { memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { FormUploadImage } from 'modules/common/components/UploadImage';
import PhotoIcon from '@mui/icons-material/Photo';
import useCategoryCreateForm from 'modules/store/settings/category/hooks/useCategoryCreateForm';
import { useCategoryDetail } from 'modules/store/settings/category/context/CategoryDetailContext';

const CategoryUpdateImage = () => {
  const { category } = useCategoryDetail();
  const { control, onSubmit, isLoading, error } = useCategoryCreateForm(() => {}, category);
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <FormUploadImage name={'image'} size={100}>
          <PhotoIcon />
        </FormUploadImage>
      </Form>
    </div>
  );
};

export default memo(CategoryUpdateImage);
