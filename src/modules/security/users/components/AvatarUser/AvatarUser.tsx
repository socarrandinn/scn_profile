import { memo, useMemo } from 'react';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { UploadAvatar } from 'components/UploadFiles/FormUploadAvatar';
import { useUpdateUser } from 'modules/security/users/hooks/useUpdateUser';
import { IImageMedia } from 'modules/common/interfaces';

type AvatarUserProps = {
  user: IUser;
};

const AvatarUser = ({ user }: AvatarUserProps) => {
  const { mutateAsync, isLoading } = useUpdateUser(user);

  const avatar: IImageMedia = useMemo(() => {
    return {
      thumb: user?.avatar || '',
      image: user?.avatarOriginal || '',
    };
  }, [user?.avatar, user?.avatarOriginal]);

  const handleUpdateAvatar = ({ target: { value } }: { target: { value: IImageMedia } }) => {
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
