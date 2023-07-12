import { memo } from 'react';
import AvatarEditable from 'components/AvatarEditable/AvatarEditable';
import NoFoodIcon from '@mui/icons-material/NoFood';
import { ICategory } from 'modules/store/settings/category/interfaces';
import { useUploadImage } from 'modules/store/settings/category/components/CategoryUpdateImage/useUploadImage';

type ImageCategoryProps = {
  category?: ICategory;
  size?: number
};

const ImageCategory = ({ category, size = 150 }: ImageCategoryProps) => {
  const { mutate, isLoading } = useUploadImage(category?._id as string);

  const onSubmit = (f: any) => {
    if (f.length) {
      mutate(f[0])
    }
  }

  return (
        <div>
            <AvatarEditable avatar={category?.image} onSubmit={onSubmit} isLoading={isLoading} size={size}
                            variant={'rounded'}>
                <NoFoodIcon fontSize='small'/>
            </AvatarEditable>
        </div>
  );
};

export default memo(ImageCategory);
