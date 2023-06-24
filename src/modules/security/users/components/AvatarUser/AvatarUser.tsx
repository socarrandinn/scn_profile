import { memo } from 'react';
import { IUser } from 'modules/security/users/interfaces/IUser';
import AvatarEditable from 'components/AvatarEditable/AvatarEditable';
import { useUploadAvatar } from 'modules/security/users/components/AvatarUser/useUploadAvatar';

type AvatarUserProps = {
  user: IUser;
};

const AvatarUser = ({ user }: AvatarUserProps) => {
  const { mutate, isLoading } = useUploadAvatar(user?._id as string);

  const onSubmit = (f: any) => {
    console.log(f)
    if (f.length) { mutate(f[0]) }
  }

  return (
    <div>
      <AvatarEditable avatar={user?.avatar} onSubmit={onSubmit} isLoading={isLoading}/>
    </div>
  );
};

export default memo(AvatarUser);
