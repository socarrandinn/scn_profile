import { memo } from 'react';
import NoFoodIcon from '@mui/icons-material/NoFood';
import { FormUploadImage } from './UploadImage';

type ImageCategoryProps = {
  category: string;
  size?: number;
};

const ImageCategory = ({ category }: ImageCategoryProps) => {
  return (
    <FormUploadImage name={'image'} size={100} variant={'square'} categoryId={category}>
      <NoFoodIcon fontSize='small' />
    </FormUploadImage>
  );
};

export default memo(ImageCategory);
