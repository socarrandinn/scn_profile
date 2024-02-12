import { memo } from 'react';
import { IImageMedia } from 'modules/common/interfaces';
import { useLocation } from 'react-router';
import { ProviderAvatarNameCell } from 'modules/inventory/provider/common/components/ProviderAvatarNameCell';

type ProviderCellProps = {
  provider: string;
  name: string;
  image: IImageMedia;
  type?: string;
};

const ProviderCell = ({ provider, name, image, type }: ProviderCellProps) => {
  const { pathname } = useLocation();
  return (
    <ProviderAvatarNameCell
      link={`${pathname}/${provider}/general`}
      name={name}
      variant={'rounded'}
      image={image}
      type={type}
    />
  );
};

export default memo(ProviderCell);
