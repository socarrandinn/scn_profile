import { memo, useMemo } from 'react';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { UploadAvatar } from 'components/UploadFiles/FormUploadAvatar';
import { ImageData } from 'interfaces/index';
import { useUpdateUser } from 'modules/security/users/hooks/useUpdateUser';

type AvatarUserProps = {
  user: IUser;
};

const AvatarUser = ({ user }: AvatarUserProps) => {
  const { mutateAsync, isLoading } = useUpdateUser(user);

  const avatar: ImageData = useMemo(() => {
    return {
      thumb: user?.avatar || '',
      image: user?.avatarOriginal || '',
    };
  }, [user?.avatar, user?.avatarOriginal]);

  const handleUpdateAvatar = ({ target: { value } }: { target: { value: ImageData } }) => {
    return mutateAsync({
      avatar: value.thumb,
      avatarOriginal: value.image,
    });
  };

  return (
    <div>
      <UploadAvatar value={avatar} onChange={handleUpdateAvatar} loading={isLoading} />
    </div>
  );
};

export default memo(AvatarUser);
