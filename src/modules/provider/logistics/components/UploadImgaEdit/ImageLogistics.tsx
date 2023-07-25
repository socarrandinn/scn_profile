import { memo } from 'react';
import AvatarEditable from 'components/AvatarEditable/AvatarEditable';
import NoFoodIcon from '@mui/icons-material/NoFood';
import { ILogistics } from 'modules/provider/logistics/interfaces';
import { useUploadImageLogistic } from 'modules/provider/logistics/hooks/useUploadImageLogistic';

type ImageCategoryProps = {
  logistics?: ILogistics;
  size?: number
};

const ImageLogistics = ({ logistics, size = 150 }: ImageCategoryProps) => {
  const { mutate, isLoading } = useUploadImageLogistic(logistics?._id as string);

  const onSubmit = (f: any) => {
    if (f.length) {
      mutate(f[0])
    }
  }

  return (
        <div>
            <AvatarEditable avatar={logistics?.avatar} onSubmit={onSubmit} isLoading={isLoading} size={size}
                            variant={'rounded'}>
                <NoFoodIcon fontSize='small'/>
            </AvatarEditable>
        </div>
  );
};

export default memo(ImageLogistics);
