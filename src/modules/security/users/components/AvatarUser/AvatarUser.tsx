import { memo } from 'react';
import { IUser } from 'modules/security/users/interfaces/IUser';
import AvatarEditable from 'components/AvatarEditable/AvatarEditable';
import { useUploadAvatar } from 'modules/security/users/components/AvatarUser/useUploadAvatar';

type AvatarUserProps = {
  user: IUser;
  height?: number
  width?: number
};

const AvatarUser = ({ user, height = 150, width = 150 }: AvatarUserProps) => {
  const { mutate, isLoading } = useUploadAvatar(user?._id as string);

  const onSubmit = (f: any) => {
    console.log(f)
    if (f.length) { mutate(f[0]) }
  }

  return (
    <div>
      <AvatarEditable width={width} height={height} avatar={user?.avatar} onSubmit={onSubmit} isLoading={isLoading}/>
    </div>
  );
};

export default memo(AvatarUser);
