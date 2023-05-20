import { memo, useMemo } from 'react';
import { UploadAvatar } from 'components/UploadFiles/FormUploadAvatar';
import { useEmployeeUpdate } from 'modules/rrhh/employee/management/hooks/useEmployeeUpdate';
import { IImageMedia } from 'modules/common/interfaces';
import { IEmployeeUpdate } from 'modules/rrhh/employee/common/interfaces';

type AvatarEmployeeProps = {
  employee: IEmployeeUpdate;
};

const AvatarEmployee = ({ employee }: AvatarEmployeeProps) => {
  const { onSubmit, isLoading } = useEmployeeUpdate(employee);

  const avatar: IImageMedia = useMemo(() => {
    return {
      thumb: employee?.avatar || '',
      image: employee?.avatarOriginal || '',
    };
  }, [employee?.avatar, employee?.avatarOriginal]);

  const handleUpdateAvatar = ({ target: { value } }: { target: { value: IImageMedia } }) => {
    return onSubmit({
      // @ts-ignore
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

export default memo(AvatarEmployee);
