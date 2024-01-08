import { memo } from 'react';
import AvatarEditable from 'components/AvatarEditable/AvatarEditable';
import NoFoodIcon from '@mui/icons-material/NoFood';
import { useUploadImageProvedorProducts } from 'modules/inventory/provider/supplier/hooks/useUploadImageProvedorProducts';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';

type ImageCategoryProps = {
  provedorProducts?: ISupplier;
  size?: number
};

const ImageSupplier = ({ provedorProducts, size = 150 }: ImageCategoryProps) => {
  const { mutate, isLoading } = useUploadImageProvedorProducts(provedorProducts?._id as string);

  const onSubmit = (f: any) => {
    if (f.length) {
      mutate(f[0])
    }
  }

  return (
        <div>
            <AvatarEditable avatar={provedorProducts?.avatar} onSubmit={onSubmit} isLoading={isLoading} size={size}
                            variant={'rounded'}>
                <NoFoodIcon fontSize='small'/>
            </AvatarEditable>
        </div>
  );
};

export default memo(ImageSupplier);
