import { memo } from 'react';
import { IImageMedia } from 'modules/common/interfaces';
import { ProviderAvatarNameCell } from 'modules/inventory/provider/common/components/ProviderAvatarNameCell';

type ProviderCellProps = {
  provider: string;
  name: string;
  image: IImageMedia;
  type: string;
  hideImage?: boolean;
};

const ProviderCell = ({ provider, name, image, type, hideImage }: ProviderCellProps) => {
  const providerPath = getPath(type);
  return (
    <ProviderAvatarNameCell
      link={`/inventory/settings/${providerPath}/${provider}/general`}
      name={name}
      variant={'rounded'}
      image={image}
      type={type}
      hideImage={hideImage}
    />
  );
};

export default memo(ProviderCell);

const getPath = (type: string) => {
  switch (type) {
    case 'LogisticProvider':
      return 'logistics';
    case 'SupplierProvider':
      return 'suppliers';
    default:
      return 'manufactures';
  }
};
