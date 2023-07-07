import { memo } from 'react';
import { IUser } from 'modules/security/users/interfaces/IUser';
import AvatarEditable from 'components/AvatarEditable/AvatarEditable';
import { useUploadAvatar } from 'modules/security/users/components/AvatarUser/useUploadAvatar';

type AvatarUserProps = {
  user: IUser;
  size?: number
};

const AvatarUser = ({ user, size = 150 }: AvatarUserProps) => {
  const { mutate, isLoading } = useUploadAvatar(user?._id as string);

  const onSubmit = (f: any) => {
    console.log(f)
    if (f.length) {
      mutate(f[0])
    }
  }

  return (
        <div>
            <AvatarEditable avatar={user?.avatar} onSubmit={onSubmit} isLoading={isLoading} size={size}/>
        </div>
  );
};

export default memo(AvatarUser);
