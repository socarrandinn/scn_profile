import { memo } from 'react';
import AvatarEditable from 'components/AvatarEditable/AvatarEditable';
import NoFoodIcon from '@mui/icons-material/NoFood';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { useUploadImageProviderProducts } from '../../hooks/useUploadImageProviderProducts';

type ImageCategoryProps = {
  providerProducts?: ISupplier;
  size?: number;
};

const ImageSupplier = ({ providerProducts, size = 150 }: ImageCategoryProps) => {
  const { mutate, isLoading } = useUploadImageProviderProducts(providerProducts?._id as string);

  const onSubmit = (f: any) => {
    if (f.length) {
      mutate(f[0]);
    }
  };

  return (
    <div>
      <AvatarEditable
        avatar={providerProducts?.avatar}
        onSubmit={onSubmit}
        isLoading={isLoading}
        size={size}
        variant={'rounded'}
      >
        <NoFoodIcon fontSize='small' />
      </AvatarEditable>
    </div>
  );
};

export default memo(ImageSupplier);
