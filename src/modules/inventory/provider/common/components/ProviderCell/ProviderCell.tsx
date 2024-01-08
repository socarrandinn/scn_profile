import { memo } from 'react'
import { IImageMedia } from 'modules/common/interfaces';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { useLocation } from 'react-router';

type ProviderCellProps = {
  provider: string
  name: string
  image: IImageMedia
}

const ProviderCell = ({ provider, name, image }: ProviderCellProps) => {
  const { pathname } = useLocation()
  return (
        <AvatarNameCell link={`${pathname}/${provider}/general`}
                        name={name}
                        variant={'rounded'}
                        image={image}/>
  );
}

export default memo(ProviderCell);
